import openAi from openai

client = openAI()

prompt = input("Enter your prompt: ")

response = client.chat.completions.create(
  model="gpt-4o",
  messages=[{"role": "user", "content": prompt}])

print(response)