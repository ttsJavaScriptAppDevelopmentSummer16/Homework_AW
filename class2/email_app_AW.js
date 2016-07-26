var emailApp = {
  name: 'Gmail',
  mailboxes: [
    {
      name: 'inbox',
      messages: [
        {
          messageFrom: 'June',
          messageContent: 'Do you want to have dinner tomorrow?'
        },
        {
          messageFrom: 'Karen',
          messageContent: 'Hi, when will you be home?'
        },
        {
          messageFrom: 'Zvi',
          messageContent: 'How are the kids doing?'
        }
      ]
    },
    {
      name: 'drafts',
      messages: [
        {
          messageFrom: 'Amy',
          messageContent: 'What is the weather today?'
        }
      ]
    },
    {
      name: 'sent',
      messages: [
        {
          messageTo: 'Melissa',
          messageContent: "Do you want to go to the park?"
        },
        {
          messageTo: 'Erik',
          messageContent: 'What does Audrey want for her birthday?'
        }
      ]
    },
    {
      name: 'starred',
      messages: []
    }
  ],
  chatContacts: [
    {
      name: 'Heidi',
      email: 'heidimccarthy@gmail.com',
      screenName: 'heidimcc'
    },

    {
      name: 'Michelle',
      email: 'michellearlotta@gmail.com',
      screenName: 'michellerocks'
    },

    {
      name: 'Zvi',
      email: 'zviweinberg@gmail.com',
      screenName: 'zvitamara'
    }
  ],

  circles: [
    {
      name: 'friends',
      people: ['Pam', 'Michelle', 'Melissa']
    },
    {
      name: 'family',
      people: ['June', 'Karen', 'Daniel']
    }
  ]
}
// Print a list of mailbox names
var mailboxList = emailApp.mailboxes;

for (var i=0; i < mailboxList.length; i++) {

  var mailBoxName = mailboxList[i].name;
  console.log(mailBoxName);
}
//Find the inbox Messages
var inboxMessages;
for (var i=0; i < mailboxList.length; i++) {
  var mailbox = mailboxList[i];
  if (mailbox.name === 'inbox') {
    inboxMessages = mailbox.messages;
  }
}
//print content for each inbox message
for(var i = 0; i < inboxMessages.length; i++) {
  console.log(inboxMessages[i].messageContent);
}
//Print the text of the second email from the inbox
console.log(inboxMessages[1].messageContent);

//Find the draft messages
var draftMessages;
for (var i=0; i < mailboxList.length; i++) {
  var mailbox = mailboxList[i];
  if (mailbox.name === 'drafts') {
    draftMessages = mailbox.messages;
  }
}
//Add a draft email to the drafts
draftMessages.push({
  messageFrom: 'Noah',
  messageContent:'This is a new email message!'
});
x = draftMessages.toString();

//Find the longest message across all emailBoxes
var mailLongestMessage = '';

for (var i = 0; i < mailboxList.length; i++) {
  var mailboxMessages = mailboxList[i].messages;
  for (var x = 0; x < mailboxMessages.length; x++) {
    var currentMessageContent = mailboxMessages[x].messageContent;
    if (currentMessageContent.length > mailLongestMessage.length) {
      mailLongestMessage = currentMessageContent;
    }
  }
}

console.log(`The longest message is ${mailLongestMessage}`);


//Create an object that contains the longest message in each mailbox
//You should be able to use it like longestMessages.drafts === 'What does Audrey want for her birthday?'
//They keys of the longestMessages object will be created dynamically
//   such that if you add another mailbox to your data, your code will still work without changes
