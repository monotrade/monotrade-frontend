import { app, BrowserWindow , Menu} from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  //Menu.setApplicationMenu(null);
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)
  
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}


const menuTemplate = [
    {
        label: 'Edit App',
        submenu: [
            {
                label: 'Undo'
            },
            {
                label: 'Redo'
            }
        ]
    },
    {
        label: 'View App',
        submenu: [
            {
                label: 'Reload'
            },
            {
                type: 'separator'
            },
            {
                label: 'Toggle Full Screen'
            }
        ]
    },
    {
      label: '编辑',
      submenu: [
        { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
        { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' },
        {
          label: 'Quit',
          accelerator: 'CmdOrCtrl+Q',
          click () {
            app.quit()
          }
        }
      ]
    }
];


app.on('ready', createWindow)
app.on('ready', () => {
  if (process.platform === 'darwin') {
    template.unshift({
        label: app.getName(),
        submenu: [
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    });
  }
  const appMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(appMenu);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})



const createDockMenu = () => {
    const dockTempalte = [
        {
            label: 'New Window',
            click () {
                console.log('New Window');
            }
        }, {
            label: 'New Window with Settings',
            submenu: [
                { label: 'Basic' },
                { label: 'Pro' }
            ]
        },
        {
            label: 'New Command...'
        }
    ];

    const dockMenu = Menu.buildFromTemplate(dockTempalte);
    if(app.dock){
      app.dock.setMenu(dockMenu);
    }
}

app.on('ready', function() {
    createDockMenu();
});




/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
