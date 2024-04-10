const endpoint = "http://41.43.83.152:3000/api/upload-image";

export default async function imageToTextHandler(req, res) {
  
    const data = req.body;
    res.status(200);
  
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Failed to convert image to text");
      }
  
      const textData = await response.json();
      res.status(200).json({ text: textData.text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  