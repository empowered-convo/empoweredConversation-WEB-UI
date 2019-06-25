# empoweredConversation-WEB-UI

## Technical Design Document
### Proposal

- [] What problem does your app solve?
* Provide a platform for people to initiate difficult/sensitive disclosures to loved ones.
- [] Be as specific as possible; how does your app solve the problem?
* It’s discreet. The survivor can share their message indirectly instead of having to state it directly.
* Gives the survivor time between drafting their message and sending it.
Provides subject matter and additional resources to the family/friend so that they’re educated on the subject before approaching the conversation.
* The survivor is notified when the module is complete - both parties essentially consent to starting the conversation.
- What is the mission statement?
* “Empowered Conversation is a text-based tool that re-envisions social support by changing the way we engage in hard conversations with one another...By educating and preparing the person being disclosed to before the conversation takes place, Empowered Conversations cultivates a more positive, connected, and empowered disclosure experience.”

### Features

- [] What features are required for your minimum viable product?
* The user will be able to fill out a form to start a conversation with the receiving friend/family member.
* A pop-up consent/liability waiver before the form sends.
* The friend/family member will receive a text notification through Twilio or other API.
* The friend/family member will receive resources through the text (related to the subject) and a “call to action” button that will notify the user they’re ready.
* Marketing page and About page
- What features may you wish to put in a future release?
* Intra-community forums or chat for user support 
- What do the top 3 similar apps do for their users?
* RAINN Live Chat - provides statistics, advocacy, and support related to the subject matter.
* Standard chat and text messaging - notifies user when family/friend has viewed message.
* Domestic Abuse Hotline - Provide additional blogs for users to read.

### Frameworks - Libraries

- [] What 3rd party frameworks/libraries are you considering using?
* Twilio
* React
* Spring
* LESS
* React-Icons

- [] Do APIs require you to contact its maintainer to gain access?
* Yes, Twilio will require a client ID or API key.

- [] Are you required to pay to use the API?
* There is a free version, but it has limitations (it will work for our project though).

- [] Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
* We’re not considering using these at the moment.

### Target Audience

- [] Who is your target audience? Be specific.
* The target audience would consist of individuals that need to approach a sensitive conversation while removing the directness of the message, and providing a neutral ground to both parties. 
* Survivors. Our users may vary in age, gender identity, etc. but many will have a history of trauma. Trust is important.

- [] What feedback have you gotten from potential users?
- [] Have you validated the problem and your solution with your target audience? How?

### Research

- [] Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.

###Prototype Key Feature(s)

- [] This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.
* Conversation starter form - Day 1
* Consent/liability waiver - Day 2
* Pop up alert for message sent confirmation - Day 2
* Twilio API implementation - Day 3
* Resource/Call to action Page - Day 3
