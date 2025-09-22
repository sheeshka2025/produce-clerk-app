// This is the back-end code for the serverless function.
// File Location: /api/identify.js

// This function simulates a successful response from the Google Vision AI.
// In a real project, this is where the call to Google's service would happen.
function getMockAIResponse(imageData) {
    console.log("Simulating AI analysis...");
    // We return a hardcoded list of labels, just like the real AI would.
    return {
        labels: [
            { description: 'Apple', score: 0.98 },
            { description: 'Fruit', score: 0.95 },
            { description: 'Gala Apple', score: 0.92 }
        ]
    };
}

// This is the main function that runs when your front-end calls `/api/identify`.
export default async function handler(request, response) {
    // We only want to allow POST requests.
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Only POST requests are allowed' });
    }

    try {
        const { image } = request.body;
        if (!image) {
            return response.status(400).json({ message: 'No image data provided.' });
        }

        // We call our mock function to get the fake results.
        const aiResults = getMockAIResponse(image);

        // We send the successful results back to the front-end.
        response.status(200).json(aiResults);

    } catch (error) {
        console.error('Error in back-end function:', error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}