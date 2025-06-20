export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { question } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "Ti si sufijski vodič koji odgovara u duhu Sejjida Ahmeda er-Rifai'a." },
        { role: "user", content: question }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json({ answer: data.choices[0].message.content });
}
