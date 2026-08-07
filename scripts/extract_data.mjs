import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsxPath = process.argv[2] || path.join(process.env.HOME, "Downloads/toefl-vocab.jsx");
const outBase = path.join(__dirname, "..", "data");

const jsx = fs.readFileSync(jsxPath, "utf8");

function sliceBetween(start, end) {
  const from = jsx.indexOf(start);
  if (from === -1) throw new Error(`Missing: ${start}`);
  const bodyStart = from + start.length;
  const to = jsx.indexOf(end, bodyStart);
  if (to === -1) throw new Error(`Missing end after: ${start}`);
  return jsx.slice(bodyStart, to);
}

async function main() {
  const mod = await import(
    `data:text/javascript,${encodeURIComponent(
      sliceBetween("const LEVEL_WORDS = ", "\n};\n\nconst BUCKET_ORDER") +
        "\n};\n" +
        sliceBetween("const BUCKET_ORDER = ", ";\nconst BUCKET_LABELS_TR") +
        ";\n" +
        sliceBetween("const BUCKET_LABELS_TR = ", ";\nconst LEVEL_LABELS") +
        ";\n" +
        sliceBetween("const LEVEL_LABELS = ", ";\nconst LEVEL_ORDER") +
        ";\n" +
        sliceBetween("const LEVEL_ORDER = ", ";\nconst PLACEMENT_STORAGE_KEY") +
        ";\nexport { LEVEL_WORDS, BUCKET_ORDER, BUCKET_LABELS_TR, LEVEL_LABELS, LEVEL_ORDER };"
    )}`
  );

  fs.mkdirSync(path.join(outBase, "placement"), { recursive: true });
  fs.writeFileSync(path.join(outBase, "placement/level_words.json"), JSON.stringify(mod.LEVEL_WORDS));
  fs.writeFileSync(
    path.join(outBase, "placement/meta.json"),
    JSON.stringify({
      bucket_order: mod.BUCKET_ORDER,
      bucket_labels_tr: mod.BUCKET_LABELS_TR,
      level_labels: mod.LEVEL_LABELS,
      level_order: mod.LEVEL_ORDER,
    })
  );

  const criteriaMod = await import(
    `data:text/javascript,${encodeURIComponent(
      sliceBetween("const EMAIL_CRITERIA = ", ";\nconst DISCUSSION_CRITERIA") +
        ";\n" +
        sliceBetween("const DISCUSSION_CRITERIA = ", ";\n\nconst CRITERIA_LABELS_TR") +
        ";\n" +
        sliceBetween("const CRITERIA_LABELS_TR = ", ";\n\nasync function generateWritingFeedback") +
        ";\nexport { EMAIL_CRITERIA, DISCUSSION_CRITERIA, CRITERIA_LABELS_TR };"
    )}`
  );

  fs.mkdirSync(path.join(outBase, "writing"), { recursive: true });
  fs.writeFileSync(
    path.join(outBase, "writing/criteria.json"),
    JSON.stringify({
      email_criteria: criteriaMod.EMAIL_CRITERIA,
      discussion_criteria: criteriaMod.DISCUSSION_CRITERIA,
      criteria_labels_tr: criteriaMod.CRITERIA_LABELS_TR,
    })
  );

  const total = Object.values(mod.LEVEL_WORDS).reduce(
    (a, l) => a + Object.values(l).reduce((b, arr) => b + arr.length, 0),
    0
  );
  console.log(`Extracted LEVEL_WORDS: ${total} entries`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
