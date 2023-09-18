const {Configuration, OpenAIApi} = require('openai');
const configuration = new Configuration({ apiKey: "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"});
const openai = new OpenAIApi(configuration);

export async function sendMMsgToOpenAI(message) {
    const res = await openai.createCompletition({
        model: 'text-davinci-003',
        prompt: message,
        temprature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}