import { Configuration, OpenAIApi } from "openai";
import privateKey from "./private/key";

enum StoryType {
    SPOOKY = "spooky",
    ROMANTIC = "romantic",
    FUNNY = "funny",
    SCARY = "scary"
}

class Person {
    name: string;
    pronouns: string;
    constructor(name: string, pronouns: string) {
        this.name = name;
        this.pronouns = pronouns;
    }
}


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

function text(people: Person[], location: string, storyType: StoryType) {
   
    const prompt = "Write a ghost story involving the following people: " + 
        people.map(person => person.name + " (" + person.pronouns + ")").join(", ") + ". " + // list the people (pro/nouns)
        "The story should take place in " + location + ". " + // where the story takes place
        "The story should be " + storyType + "."; // what type of story it is

    console.log(prompt);

  const configuration = new Configuration({
      apiKey: privateKey,
    });    

  const openai = new OpenAIApi(configuration);

  return async () => {
      await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(prompt),
        temperature: 0.6,
      });
    };
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

export { dalle, text, StoryType, Person }