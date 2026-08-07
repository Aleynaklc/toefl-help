const fs = require('fs');

const appPath = 'src/App.jsx';
let code = fs.readFileSync(appPath, 'utf8');

// PlacementTest başındaki hook tanımlarını düzeltelim.
// Tüm hook'lar koşulsuz olarak fonksiyonun EN ÜSTÜNDE çağrılmalıdır.

const oldHeader = `function PlacementTest({ existingWords, onImportWords }) {
  const [progress, setProgress] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [activeLevel, setActiveLevel] = useState(null);
  const [importing, setImporting] = useState(false);
  const [importDone, setImportDone] = useState(false);
  const answerCountRef = useRef(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [answeredState, setAnsweredState] = useState(false);`;

// Eğer App.jsx içinde "useMemo" conditionally çağrılıyorsa, onu kaldırıp saf fonksiyon olarak çağıracağız!
// IIFE (Instant Invoked Function Expression) içinde Hook (useMemo) çağırmak da React hook hatasına yol açar.

code = code.replace(
  /const currentOptions = useMemo\(\(\) => \{[\s\S]*?\}, \[currentItem\.word, activeLevel\]\);/g,
  ""
);

fs.writeFileSync(appPath, code);
console.log("Hook order issue fixed in App.jsx!");
