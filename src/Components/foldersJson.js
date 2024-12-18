export const FolderStructureData = {
  "Documents": [
    "Document1.jpg",
    "Document2.jpg",
    "Document3.jpg",
  ],
  "Desktop": [
    "Screenshot1.jpg",
    "videoa1.mp4"
  ],
  "Downloads": {
    "Drivers": [
      "Printerdriver.dmg",
      "cameradriver.dmg",
    ]
  },
  "Application": [
    "Webstorm.dmg"
  ],
  "chromedriver.dmg": 'file',
}

export const nestedFolderStructure = {
  "src": {
    "assets": {
      "images": {
        "logos": {
          "logo1.png": 'file',
          "logo2.svg": 'file'
        },
        "icons": {
          "icon1.png": 'file',
          "icon2.png": 'file',
          "icon3.svg": 'file'
        }
      },
      "styles": {
        "global.css": 'file',
        "themes": {
          "light.css": 'file',
          "dark.css": 'file'
        }
      }
    },
    "components": {
      "UI": {
        "Button": {
          "index.js": 'file',
          "Button.styles.js": 'file',
          "Button.test.js": 'file'
        },
        "Modal": {
          "index.js": 'file',
          "Modal.styles.js": 'file',
          "Modal.test.js": 'file',
          'new':['file1','file2']
        },
        "Form": {
          "index.js": 'file',
          "FormField": {
            "index.js": 'file',
            "FormField.styles.js": 'file',
            "FormField.test.js": 'file'
          },
          "FormButton": {
            "index.js": 'file',
            "FormButton.styles.js": 'file',
            "FormButton.test.js": 'file'
          }
        }
      },
      "layouts": {
        "Header": {
          "index.js": 'file',
          "Header.styles.js": 'file',
          "Header.test.js": 'file'
        },
        "Footer": {
          "index.js": 'file',
          "Footer.styles.js": 'file',
          "Footer.test.js": 'file'
        },
        "DashboardLayout": {
          "index.js": 'file',
          "DashboardLayout.styles.js": 'file',
          "DashboardLayout.test.js": 'file'
        }
      }
    },
    "hooks": {
      "useAuth": {
        "index.js": 'file',
        "useAuth.test.js": 'file'
      },
      "useFetch": {
        "index.js": 'file',
        "useFetch.test.js": 'file'
      }
    },
    "services": {
      "api": {
        "index.js": 'file',
        "auth.js": 'file',
        "data.js": 'file'
      },
      "storage": {
        "index.js": 'file',
        "localStorage.js": 'file',
        "sessionStorage.js": 'file'
      }
    },
    "utils": {
      "validators": {
        "emailValidator.js": 'file',
        "passwordValidator.js": 'file'
      },
      "helpers": {
        "dateHelper.js": 'file',
        "stringHelper.js": 'file'
      },
      "constants": {
        "appConstants.js": 'file',
        "apiEndpoints.js": 'file'
      }
    },
    "pages": {
      "Home": {
        "index.js": 'file',
        "Home.styles.js": 'file',
        "Home.test.js": 'file'
      },
      "Login": {
        "index.js": 'file',
        "Login.styles.js": 'file',
        "Login.test.js": 'file'
      },
      "Dashboard": {
        "index.js": 'file',
        "Dashboard.styles.js": 'file',
        "Dashboard.test.js": 'file'
      },
      "Settings": {
        "index.js": 'file',
        "Settings.styles.js": 'file',
        "Settings.test.js": 'file'
      }
    },
    "tests": {
      "unit": {
        "Button.test.js": 'file',
        "Modal.test.js": 'file'
      },
      "integration": {
        "Dashboard.test.js": 'file',
        "Login.test.js": 'file'
      },
      "e2e": {
        "HomePage.e2e.test.js": 'file',
        "LoginPage.e2e.test.js": 'file'
      }
    },
    "config": {
      "webpack": {
        "webpack.config.js": 'file'
      },
      "babel": {
        "babel.config.js": 'file'
      },
      "eslint": {
        "eslint.config.js": 'file'
      }
    }
  },
  "public": {
    "index.html": 'file',
    "favicon.ico": 'file',
    "manifest.json": 'file'
  },
  "node_modules": 'file',
  "package.json": 'file',
  "README.md": 'file'
}
