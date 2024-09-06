_**WordWiz**_

**WordWiz is an educational application designed to assist children in learning to read and write through interactive features and advanced machine learning techniques. This app incorporates various natural language processing (NLP) tools and animations to create an engaging learning experience.**

**Features**

**1. Spelling and Grammar Checks**

NLP Tool Used: LanguageTool
Description: Checks for spelling and grammar errors in the text. Provides feedback on errors including the type and location within the text.
Backend: Utilizes the language-tool library to analyze text.
Frontend: React component allows users to input text and view errors.


**2. Contextual Suggestions**

NLP Tool Used: TextgenRNN
Description: Provides contextual suggestions and text completions based on user input.
Backend: Uses the textgenrnn library to generate text suggestions.
Frontend: React component enables users to get and view text suggestions.


**3. Text Analysis**

 NLP Tool Used: Google Cloud Natural Language API
Description: Analyzes text for sentiment, extracting information about the emotional tone of the content.
Backend: Integrates Google Cloud Natural Language API for sentiment analysis.
Frontend: React component displays sentiment analysis results including score and magnitude.


**4. Read-Aloud Timer**

NLP Tool Used: Web Speech API
Description: Reads aloud text to the user with a timer of 10 seconds. Useful for auditory learning and practice.
Frontend: React component uses the Web Speech API to perform the read-aloud functionality with a time limit.


**Tech Stack**

Frontend: React.js for building interactive user interfaces.
Backend: Node.js with Express.js for handling API requests and processing data.
Database: MongoDB for storing user data and application state.
Machine Learning Libraries: language-tool, textgenrnn, and Google Cloud NLP API.
Authentication: Mobile number verification for secure user authentication.

**Usage**

Spelling and Grammar Checks: Enter text into the provided field and click "Check Grammar" to view spelling and grammar issues.
Contextual Suggestions: Enter text and click "Get Suggestions" to receive contextually relevant text suggestions.
Text Analysis: Input text and click "Analyze Text" to view sentiment analysis results.
Read-Aloud Timer: Click "Read Aloud" to have the text read aloud with a 10-second timer.


