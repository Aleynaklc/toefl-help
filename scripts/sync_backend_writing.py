import json

item_bank_path = "/Users/aleynakilic/Downloads/toefl-help-main/frontend/src/data/toefl2026_item_bank.json"
with open(item_bank_path, "r", encoding="utf-8") as f:
    item_bank = json.load(f)

emails = []
for item in item_bank["writing"]["email"]:
    emails.append({
        "id": item["id"],
        "title": item["title"],
        "scenario": item["scenario"],
        "bullets": item["bullets"]
    })

discussions = []
for item in item_bank["writing"]["academic_discussion"]:
    discussions.append({
        "id": item["id"],
        "title": item["title"],
        "question": item["question"],
        "student_a": item["studentA"],
        "student_b": item["studentB"]
    })

with open("/Users/aleynakilic/Downloads/toefl-help-main/data/writing/email_prompts.json", "w", encoding="utf-8") as f:
    json.dump(emails, f, ensure_ascii=False, indent=2)

with open("/Users/aleynakilic/Downloads/toefl-help-main/data/writing/discussion_prompts.json", "w", encoding="utf-8") as f:
    json.dump(discussions, f, ensure_ascii=False, indent=2)

print("Synchronized backend writing prompt files successfully.")
