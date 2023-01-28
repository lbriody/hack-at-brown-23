import { Configuration, OpenAIApi } from "openai";
import privateKey from "./private/key";


async function dalle(prompt: string) {

    const configuration = new Configuration({
        apiKey: privateKey,
      });    

    const openai = new OpenAIApi(configuration);

    const generateImage = await openai.createImage({
          prompt: prompt,
          n: 1,
          size: "256x256",
        });
    
    return generateImage.data.data[0].url;
}

function text(prompt: string) {

  const configuration = new Configuration({
      apiKey: privateKey,
    });    

  const openai = new OpenAIApi(configuration);

  const generateText = async () => {
      await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(prompt),
        temperature: 0.6,
      });
    };
  
  return generateText();
}

function generatePrompt(prompt: string) {
  const lower = prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

  Animal: Cat
  Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  Animal: Dog
  Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  Animal: ${lower}
  Names:`;
}

export { dalle, text }