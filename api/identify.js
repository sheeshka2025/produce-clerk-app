// This is the REAL back-end code for the serverless function.
// File Location: /api/identify.js

const vision = require('@google-cloud/vision');

// This is the main function that runs when your front-end calls '/api/identify'.
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    try {
        // Create a new client to talk to Google's AI.
        // It will automatically find the API key you stored in Vercel.
        const client = new vision.ImageAnnotatorClient();

        // Get the image data sent from the front-end.
        // We need to strip the header from the image data string.
        const imageData = req.body.image.replace(/^data:image\/jpeg;base64,/, "");

        // Prepare the request to send to Google.
        const request = {
            image: {
                content: imageData,
            },
            features: [{ type: 'LABEL_DETECTION', maxResults: 5 }],
        };

        // Send the request and get the results.
        const [result] = await client.labelDetection(request);
        const labels = result.labelAnnotations; // This is the array of results.
        
        // Send the real labels from the AI back to the front-end.
        res.status(200).json({ labels: labels });

    } catch (error) {
        console.error('GOOGLE VISION AI ERROR:', error);
        res.status(500).json({ message: 'Error analyzing image with Vision AI.' });
    }
}