import urllib.request

url = "https://drive.google.com/file/d/1BhU8MGt4EjgbUBKcwYaj4SB4aER-60kt/preview"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    with open('video_page.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Downloaded")
except Exception as e:
    print("Error:", e)
