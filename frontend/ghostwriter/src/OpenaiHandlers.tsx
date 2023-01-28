import { Configuration, OpenAIApi } from "openai";
import privateKey from "../private/key";


function dalle(prompt: string) {

    const configuration = new Configuration({
        apiKey: privateKey,
      });    

    const openai = new OpenAIApi(configuration);

    const generateImage = async () => {
        await openai.createImage({
          prompt: prompt,
          n: 1,
          size: "256x256",
        });
      };
    
    return generateImage();
}

export { dalle }