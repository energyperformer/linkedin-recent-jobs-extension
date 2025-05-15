# LinkedIn Recent Jobs Extension

A Chrome extension that helps you filter LinkedIn job listings based on posting time (last 30 minutes, 1 hour, or 6 hours).

## Description

LinkedIn Recent Jobs Extension is a browser extension that enhances your job search experience on LinkedIn. It allows you to quickly filter job listings to see only the most recently posted jobs, giving you a competitive edge in your job hunt by focusing on fresh opportunities.

## Features

- Filter jobs posted in the last 30 minutes
- Filter jobs posted in the last 1 hour
- Filter jobs posted in the last 6 hours
- Works directly on LinkedIn job search pages

## Installation

### For Users

1. Download the extension files or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files
5. The extension icon should now appear in your browser toolbar

### For Developers

1. Clone this repository:
   ```
   git clone https://github.com/energyperformer/linkedin-recent-jobs-extension.git
   ```
2. Navigate to the project directory:
   ```
   cd linkedin-recent-jobs-extension
   ```
3. Make your changes to the code
4. Test the extension by loading it as an unpacked extension in Chrome

## Usage

1. Navigate to LinkedIn's job search page (https://www.linkedin.com/jobs/)
2. Enter your search criteria as usual
3. Click on the extension icon in your browser toolbar
4. Select one of the filter options:
   - Last 30 Minutes
   - Last 1 Hour
   - Last 6 Hours
5. The page will automatically refresh with the time filter applied

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Chrome Extension API

## Project Structure

- `manifest.json`: Extension configuration
- `popup.html`: Extension popup interface
- `popup.js`: Main functionality for filtering jobs
- `icon.png`: Extension icon

