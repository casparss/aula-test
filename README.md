### Aula dev assignment: Caspar Sambrook-Smith

Here's my development test. I used TypeScript as oppose to JavaScript. I probably wasted time trying to implement a 'lyrics' feature and tried to integrate the app. into two APIs, both with their own set of problems: Mourits Lyrics API 522ed on every request, so the connection timed out, and I tried another API called Musixmatch, but the endpoint required a common ID that the iTunes feed doesn't expose, annoyingly, so based on this I just ripped the feature out completely.

Despite not fulfilling one of the criteria I feel like the project demonstrates how I would design, structure code and write tests.

Technologies I would usually use on React projects are:

-   Redux or MobX for state - this was completely unnecessary so opted to just keep state within useState hooks
-   Storybook - with only 3 or 4 componenets I didn't see value in spending time writing UI stories here, opting isntead to just conventional unit tests only

To run:

```
npm start
```

To test:

```
npm test
```
