
const ListPhrasesCommand: ICommand = {
  name: 'ls',
  description: 'List files',
  switches: {
    'all': 'List all phrases',
    'random': 'List a random phrase',
    'easy': 'List only easy phrases',
  }, 
  execute: (args: string[]) => {
    // Command logic here
    return 'Phrases listed.';
  },
};

// Register the command
const commandRegistry = new CommandRegistry();
commandRegistry.register(ListPhrasesCommand);