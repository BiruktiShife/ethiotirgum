<div align="center">


  <h3 align="center">Ethio Tirgum</h3>

</div>

This repository contains the code.

Built with the latest Next.js and TypeScript, Ethio Tirgum is an advanced voice translation tool for four ethiopian languages. It allows users to translate text to another language, and playback the translation. This project is perfect for those looking to learn how to build translation APIs into a Next.js application.


- Next.js
- TypeScript
- Tailwind CSS

## <a name="features">🔋 Features</a>


👉 **Text Translation**: Translates the recognized text into a selected target language using OpenAI's GPT-4 model.

👉 **Audio Playback**: Converts translated text back into speech using the Web Speech API's speech synthesis.

👉 **Language Selection**: Allows users to select target languages for translation.

👉 **Copy to Clipboard**: Copies the translated text to the clipboard.

👉 **Responsive Design**: Ensures a seamless experience across different devices.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_API_KEY=your-openai-api-key
```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
