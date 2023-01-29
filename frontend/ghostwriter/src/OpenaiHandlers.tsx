import { Configuration, OpenAIApi } from "openai";
import privateKey from "./private/key";

enum StoryType {
    SPOOKY = "spooky",
    ROMANTIC = "romantic",
    FUNNY = "funny",
    SCARY = "scary"
}

enum callType {
    START,
    A_CONT,
    B_CONT,
    C_CONT,
    A,
    B,
    C
}

class GptCall {
    names: string[];
    location: string;
    storyType: StoryType;

    constructor(names: string[], location: string, storyType: StoryType) {
        this.names = names;
        this.location = location;
        this.storyType = storyType;
    }

    async call(call: callType) {
        let prompt = "";
        if (call == callType.START) {
                prompt = "You are providing segments of a choose your own adventure story to a user,\
                 who will make a choice after each page or so of text. You will then be asked to continue\
                  the story for another page and offer another choice. Do not mention this. When you offer\
                   a choice, do not say the outcome of the choice. The theme of the story will be a ghost \
                   story involving the following people: " + this.names.map(person => person).join(", ") + "\
                   . The story should take place in " + this.location + ". The story should be " + this.storyType + ".";
        }
        else if (call = callType.A_CONT) prompt = "A, then offer another prompt.";
        else if (call = callType.B_CONT) prompt = "B, then offer another prompt.";
        else if (call = callType.C_CONT) prompt = "C, then offer another prompt";
        else if (call = callType.A) prompt = "A";
        else if (call = callType.B) prompt = "B";
        else if (call = callType.C) prompt = "C";

        return await gpt(prompt)

    }
}




// class Person {
//     name: string;
//     pronouns: string;
//     constructor(name: string, pronouns: string) {
//         this.name = name;
//         this.pronouns = pronouns;
//     }
// }


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

async function gpt(prompt: string) {
    console.log(prompt);

  const configuration = new Configuration({
      apiKey: privateKey,
    });    
  const openai = new OpenAIApi(configuration);
  const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.6,
        max_tokens: 2048,
      });
    return result.data.choices[0].text;
    };


// async function text(people: string[], location: string, storyType: StoryType) {
   
//     const prompt = "Write a campfire ghost story involving the following people: " + 
//         people.map(person => person).join(", ") + ". " + // list the people (pro/nouns)
//         "The story should take place in " + location + ". " + // where the story takes place
//         "The story should be " + storyType + ". " + // what type of story it is
//         "The story should be around a page. ";

//     console.log(prompt);

//   const configuration = new Configuration({
//       apiKey: privateKey,
//     });    

//   const openai = new OpenAIApi(configuration);

//   const result = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: prompt,
//         temperature: 0.6,
//         max_tokens: 2048,
//       });

//     return result.data.choices[0].text;
//     };


// function generatePrompt(prompt: string) {
//   const lower = prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
//   return `Suggest three names for an animal that is a superhero.

//   Animal: Cat
//   Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
//   Animal: Dog
//   Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
//   Animal: ${lower}
//   Names:`;
// }

export { dalle, gpt as text, StoryType, GptCall }