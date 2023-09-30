# Chrome Extension Boilerplate (Manifest V3)

This is a basic boilerplate for a Chrome Extension using the latest Manifest V3 standards. Below is an explanation of each element in the boilerplate.

## Directory Structure

```
my-extension/
|-- manifest.json
|-- background.js
|-- popup/
|   |-- popup.html
|   |-- popup.js
|-- thank_you.html
|-- settings.html
|-- README.md
```

### manifest.json

This is the manifest file that describes metadata, permissions, and other settings for the extension.

- `manifest_version`: Specifies the manifest version. For Manifest V3, it should be 3.
- `name`: The name of your extension.
- `version`: The version of your extension.
- `description`: A brief description of your extension.
- `permissions`: An array of permissions your extension needs.
- `background`: Specifies the background script or service worker.
- `action`: Specifies the default popup.

#### Optional Settings

- `icons`: Specifies icons for your extension.
  ```json
  "icons": {
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png"
  }
  ```
- `content_scripts`: Specifies content scripts.
  ```json
  "content_scripts": [
    {
      "matches": ["*://*.example.com/*"],
      "js": ["content.js"]
    }
  ]
  ```

### background.js

This is a background script that listens for the extension's installation event.

### popup.html

This is a simple HTML file that serves as the popup when you click the extension icon.

### popup.js

This is a JavaScript file that runs when the popup is opened.

## Alternative Solutions

1. **Content Scripts**: You can also include content scripts in the manifest to interact with web pages.
2. **Options Page**: If you want to provide settings for your extension, you can include an options page.
3. **Event Page**: For more complex background operations, you can use an event page instead of a service worker.

## Settings Page

The `options_page` field in the `manifest.json` specifies an HTML file that serves as the settings page for the extension. This page can be accessed by right-clicking the extension icon and selecting 'Options'.

Example in `manifest.json`:
```json
"options_page": "settings.html"
```

### settings.html

This is the HTML file that serves as the settings page. You can include various settings and links here. For example, a link to the Twitter account is included in the boilerplate.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Settings</title>
</head>
<body>
  <h1>Settings</h1>
  <a href="https://twitter.com/Goo_Gurt_" target="_blank">Follow us on Twitter</a>
</body>
</html>
```

For more details and code samples, you can visit the [official documentation on the Manifest file format](https://developer.chrome.com/docs/extensions/mv3/manifest/).

## Optional Fields in `manifest.json`

### 1. `author`
Specifies the author of the extension.
```json
"author": "developer@example.com"
```

### 2. `chrome_settings_overrides`
Allows you to override certain Chrome settings.

### 3. `chrome_url_overrides`
Allows you to override special Chrome pages.

### 4. `commands`
Specifies keyboard shortcuts for your extension.

### 5. `content_security_policy`
Sets the content security policy for your extension.

### 6. `cross_origin_embedder_policy`
Sets the cross-origin embedder policy.

### 7. `cross_origin_opener_policy`
Sets the cross-origin opener policy.

### 8. `declarative_net_request`
Allows you to use declarative rules for network requests.

### 9. `devtools_page`
Specifies a DevTools page for your extension.
```json
"devtools_page": "devtools.html"
```

### 10. `event_rules`
Allows you to specify event rules.

### 11. `externally_connectable`
Specifies which external domains can connect to your extension.

### 12. `file_browser_handlers`
Allows you to handle file browser events.

### 13. `file_system_provider_capabilities`
Specifies capabilities for file system providers.

### 14. `homepage_url`
Sets the homepage URL for your extension.
```json
"homepage_url": "https://path/to/homepage"
```

### 15. `host_permissions`
Specifies host permissions.

### 16. `import`
Allows you to import another extension's manifest.

### 17. `incognito`
Specifies incognito mode settings.
```json
"incognito": "spanning, split, or not_allowed"
```

### 18. `input_components`
Specifies input components like IMEs.

### 19. `key`
Specifies a public key for the extension.

### 20. `minimum_chrome_version`
Specifies the minimum Chrome version required.
```json
"minimum_chrome_version": "107"
```

### 21. `oauth2`
Specifies OAuth2 settings.

### 22. `omnibox`
Allows you to add Omnibox support.

### 23. `optional_host_permissions`
Specifies optional host permissions.

### 24. `optional_permissions`
Specifies optional permissions.

### 25. `options_page`
Specifies an options page.
```json
"options_page": "options.html"
```

### 26. `options_ui`
Specifies options UI settings.

### 27. `permissions`
Specifies permissions.

### 28. `requirements`
Specifies hardware and API requirements.

### 29. `sandbox`
Specifies sandbox settings.

### 30. `short_name`
Specifies a short name for the extension.
```json
"short_name": "Short Name"
```

### 31. `side_panel`
Specifies a side panel.

### 32. `storage`
Specifies storage settings.

### 33. `tts_engine`
Specifies TTS engine settings.

### 34. `update_url`
Specifies the update URL.
```json
"update_url": "https://path/to/updateInfo.xml"
```

### 35. `version_name`
Specifies a version name.
```json
"version_name": "1.0 beta"
```

### 36. `web_accessible_resources`
Specifies web-accessible resources.
