To Download VSCode , Go to code.visualstudio.com, and click download for windows button, we can either install the stable build OR we can build the Insiders build which will carry the latest updates

The UI is divided into 5 regions
1. To the very left we have the Activity Bar, which lets you switch between different views
2. Right adjacent to that we have the Side Bar, which contains the different views
3. Then we have the main Editor Area, used to edit are files
4. Then we have the Panels, which contains panels for integrated terminal, output, debug information, errors and warnings
5. Finally we have the Status Bar, which provides the information about the Open Project and the Files you edit

When we install VSCode it is added to our Environment Path, as a result we can open VSCode from the command prompt
To launch the VSCode from the command line write: code
This will open VSCode from where we left off from the last session, VSCode even remembers the cursor position
To launch VSCode from a fresh instance write: code -n

To launch VSCode in the current directory where you left off write: code .

Let's say you know the file you want to open at a very specific file along with line number and column number, write: code --goto <fileName>:<lineNumber>:<columnNumber>
coed --goto main.js:10:5

to learn about more commands we can use the help option: code --help


COMMAND PALETTE and NAVIGATION
Through Command Palette we have access to most functionality of VSCode along with keyboard shortcuts
You can execute Editor Commands
Open Files
Search for Symbols
all using the same interactive window
To navigate to any workspace you can press ctrl + P and then type in the full or partial name of the file you're looking for
