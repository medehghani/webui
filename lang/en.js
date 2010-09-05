var lang = [
	  "Torrent files||*.torrent||All files (*.*)||*.*||"
	, "OK"
	, "Cancel"
	, "Apply"
	, "Preferences"
	, "Language"
	, "Language:"
	, "Privacy"
	, "Check for updates automatically"
	, "Update to beta versions"
	, "Send anonymous information when checking for updates"
	, "When Downloading"
	, "Append .!ut to incomplete files"
	, "Pre-allocate all files"
	, "Prevent standby if there are active torrents"
	, "Display Options"
	, "Confirm when deleting torrents"
	, "Confirm when deleting trackers"
	, "Show confirmation dialog on exit"
	, "Alternate list background color"
	, "Show current speed in the title bar"
	, "Show speed limits in the status bar"
	, "When Adding Torrents"
	, "Don't start the download automatically"
	, "Activate the program window"
	, "Show a window that displays the files inside the torrent"
	, "Actions for Double Click"
	, "For seeding torrents:"
	, "For downloading torrents:"
	, "Location of Downloaded Files"
	, "Put new downloads in:"
	, "Always show dialog on manual add"
	, "Move completed downloads to:"
	, "Append the torrent's label"
	, "Only move from the default download directory"
	, "Location of .torrents"
	, "Store .torrents in:"
	, "Move .torrents for finished jobs to:"
	, "Automatically load .torrents from:"
	, "Delete loaded .torrents"
	, "Listening Port"
	, "Port used for incoming connections:"
	, "Random port"
	, "Randomize port each start"
	, "Enable UPnP port mapping"
	, "Enable NAT-PMP port mapping"
	, "Proxy Server"
	, "Type:"
	, "Proxy:"
	, "Port:"
	, "Authentication"
	, "Username:"
	, "Password:"
	, "Resolve hostnames through proxy"
	, "Use proxy server for peer-to-peer connections"
	, "Add Windows Firewall exception"
	, "Global Upload Rate Limiting"
	, "Maximum upload rate (kB/s): [0: unlimited]"
	, "Automatic"
	, "Alternate upload rate when not downloading (kB/s):"
	, "Global Download Rate Limiting"
	, "Maximum download rate (kB/s): [0: unlimited]"
	, "Number of Connections"
	, "Global maximum number of connections:"
	, "Maximum number of connected peers per torrent:"
	, "Number of upload slots per torrent:"
	, "Use additional upload slots if upload speed < 90%"
	, "Global Rate Limit Options"
	, "Apply rate limit to transport overhead"
	, "Apply rate limit to uTP connections"
	, "Basic BitTorrent Features"
	, "Enable DHT Network"
	, "Ask tracker for scrape information"
	, "Enable DHT for new torrents"
	, "Enable Peer Exchange"
	, "Enable Local Peer Discovery"
	, "Limit local peer bandwidth"
	, "IP/Hostname to report to tracker:"
	, "Protocol Encryption"
	, "Outgoing:"
	, "Allow incoming legacy connections"
	, "Enable bandwidth management [uTP]"
	, "Enable UDP tracker support"
	, "Enable Transfer Cap"
	, "Cap Settings"
	, "Stop torrents when:"
	, "reach"
	, "in the last"
	, "days"
	, "Usage history for selected period:"
	, "Uploaded:"
	, "Downloaded:"
	, "Uploaded + Downloaded:"
	, "Time period:"
	, "Last %d days"
	, "Reset History"
	, "Queue Settings"
	, "Maximum number of active torrents (upload or download):"
	, "Maximum number of active downloads:"
	, "Seed While [Default values]"
	, "Ratio is:  <="
	, "%   or seeding time is:"
	, "Seeding tasks have higher priority than downloading tasks"
	, "When µTorrent Reaches the Seeding Goal"
	, "Limit the upload rate to (kB/s): [0: stop]"
	, "Enable Scheduler"
	, "Scheduler Table"
	, "Scheduler Settings"
	, "Limited upload rate (kB/s):"
	, "Limited download rate (kB/s):"
	, "Disable DHT when turning off"
	, "Enable Web UI"
	, "Authentication"
	, "Username:"
	, "Password:"
	, "Enable Guest account with username:"
	, "Connectivity"
	, "Alternative listening port (default is the connection port):"
	, "Restrict access to the following IPs (separate multiple entries with a comma):"
	, "Advanced Options [WARNING: Do not modify!]"
	, "Value:"
	, "True"
	, "False"
	, "Set"
	, "Speed Popup List [Separate multiple values with a comma]"
	, "Override automatic speed popup list"
	, "Upload speed list:"
	, "Download speed list:"
	, "Persistent Labels [Separate multiple labels with a | character]"
	, "Search Engines [Format: name|URL]"
	, "Basic Cache Settings"
	, "The disk cache is used to keep frequently accessed data in memory to reduce the number of reads and writes to the hard drive. µTorrent normally manages the cache automatically, but you may change its behavior by modifying these settings."
	, "Override automatic cache size and specify the size manually (MB):"
	, "Reduce memory usage when the cache is not needed"
	, "Advanced Cache Settings"
	, "Enable caching of disk writes"
	, "Write out untouched blocks every 2 minutes"
	, "Write out finished pieces immediately"
	, "Enable caching of disk reads"
	, "Turn off read caching if the upload speed is slow"
	, "Remove old blocks from the cache"
	, "Increase automatic cache size when cache thrashing"
	, "Disable Windows caching of disk writes"
	, "Disable Windows caching of disk reads"
	, "Torrent Properties"
	, "Trackers (separate tiers with an empty line)"
	, "Bandwidth Settings"
	, "Maximum upload rate (kB/s): [0: default]"
	, "Maximum download rate (kB/s): [0: default]"
	, "Number of upload slots: [0: default]"
	, "Seed While"
	, "Override default settings"
	, "Ratio is:  <="
	, "%  or seeding time is:"
	, "Other Settings"
	, "Initial Seeding"
	, "Enable DHT"
	, "Peer Exchange"
	, "IP"
	, "Port"
	, "Client"
	, "Flags"
	, "%"
	, "Relevance"
	, "Down Speed"
	, "Up Speed"
	, "Reqs"
	, "Waited"
	, "Uploaded"
	, "Downloaded"
	, "Hasherr"
	, "Peer dl."
	, "MaxUp"
	, "MaxDown"
	, "Queued"
	, "Inactive"
	, "Done"
	, "Name"
	, "%"
	, "Priority"
	, "Size"
	, "skip"
	, "low"
	, "normal"
	, "high"
	, "Downloaded:"
	, "Uploaded:"
	, "Seeds:"
	, "Remaining:"
	, "Download Speed:"
	, "Upload Speed:"
	, "Peers:"
	, "Share Ratio:"
	, "Hash:"
	, "Transfer"
	, "%d of %d connected (%d in swarm)"
	, "D:%s U:%s - %s"
	, "Show Category List"
	, "Show Detailed Info"
	, "Reset"
	, "Resolve IPs"
	, "Get File(s)"
	, "Don't Download"
	, "High Priority"
	, "Low Priority"
	, "Normal Priority"
	, "Delete Data"
	, "Force Re-Check"
	, "Force Start"
	, "Label"
	, "Pause"
	, "Properties"
	, "Move Down Queue"
	, "Move Up Queue"
	, "Remove"
	, "Remove And"
	, "Start"
	, "Stop"
	, "Active"
	, "All"
	, "Completed"
	, "Downloading"
	, "Inactive"
	, "No Label"
	, "||Avail.||Availability"
	, "Done"
	, "Downloaded"
	, "Down Speed"
	, "ETA"
	, "Label"
	, "Name"
	, "#"
	, "Peers"
	, "Remaining"
	, "Seeds"
	, "Seeds/Peers"
	, "Ratio"
	, "Size"
	, "Status"
	, "Uploaded"
	, "Up Speed"
	, "Are you sure you want to remove the %d selected torrents and all associated data?"
	, "Are you sure you want to remove the selected torrent and all associated data?"
	, "Are you sure you want to remove the %d selected torrents?"
	, "Are you sure you want to remove the selected torrent?"
	, "Checked %:.1d%%"
	, "Downloading"
	, "Error: %s"
	, "Finished"
	, "Paused"
	, "Queued"
	, "Queued Seed"
	, "Seeding"
	, "Stopped"
	, "Enter label"
	, "Enter the new label for the selected torrents:"
	, "New Label..."
	, "Remove Label"
	, "General||Trackers||Peers||Pieces||Files||Speed||Logger||"
	, "Add Torrent"
	, "Add Torrent from URL"
	, "Pause"
	, "Preferences"
	, "Move Down Queue"
	, "Move Up Queue"
	, "Remove"
	, "Start"
	, "Stop"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Advanced"
	, "Bandwidth"
	, "Connection"
	, "Disk Cache"
	, "Directories"
	, "General"
	, "Scheduler"
	, "Queueing"
	, "UI Extras"
	, "UI Settings"
	, "BitTorrent"
	, "Web UI"
	, "Transfer Cap"
	, "Show Properties||Start/Stop||Open Folder||Show Download Bar||"
	, "Disabled||Enabled||Forced||"
	, "(none)||Socks4||Socks5||HTTPS||HTTP||"
	, "Uploads||Downloads||Uploads + Downloads||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Name"
	, "Value"
	, "Mon||Tue||Wed||Thu||Fri||Sat||Sun||"
	, "Monday||Tuesday||Wednesday||Thursday||Friday||Saturday||Sunday||"
	, "Full speed"
	, "Full speed - Uses normal global bandwidth limits"
	, "Limited"
	, "Limited - Uses scheduler-specified bandwidth limits"
	, "Seeding only"
	, "Seeding only - Only uploads data (including incomplete)"
	, "Turn off"
	, "Turn off - Stops all torrents that are not forced"
	, "<= %d hours"
	, "(Ignore)"
	, "<= %d minutes"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw"
];