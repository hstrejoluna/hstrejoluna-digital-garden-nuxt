---
title: "Bash Script for generate doomer mixed music"
publishOn: 2023-04-02T18:44:00
category: "gnulinux"
tags: ["ai", "music", "gnulinux"]
---

(Generated with Notion A.I.)
Sure, here's a sample bash script that can process audio files and generate multiple versions of the doomer mix. You can then manually choose the best version.

```
#!/bin/bash

# Install necessary dependencies
sudo apt-get update
sudo apt-get install -y ffmpeg sox

# Set input and output directories
input_dir="/path/to/input/directory"
output_dir="/path/to/output/directory"

# Loop through all audio files in input directory
for file in "$input_dir"/*.mp3; do
    # Get filename without extension
    filename=$(basename "$file" .mp3)

    # Generate multiple versions of doomer mix using ffmpeg and sox
    ffmpeg -i "$file" -af "afade=t=in:st=0:d=5, loudnorm" -f sox - | sox - -t wav - remix 1,2,3,4,5,6,7,8,9,10 | sox -t wav - "$output_dir/$filename-doomer-mix1.wav" remix 1,2,3,4,5,6,7,8,9,10 highpass 300 lowpass 5000 norm -3
    ffmpeg -i "$file" -af "afade=t=in:st=0:d=5, loudnorm" -f sox - | sox - -t wav - remix 1,2,3,4,5,6,7,8,9,10 | sox -t wav - "$output_dir/$filename-doomer-mix2.wav" remix 1,2,3,4,5,6,7,8,9,10 highpass 300 lowpass 6000 norm -3
    ffmpeg -i "$file" -af "afade=t=in:st=0:d=5, loudnorm" -f sox - | sox - -t wav - remix 1,2,3,4,5,6,7,8,9,10 | sox -t wav - "$output_dir/$filename-doomer-mix3.wav" remix 1,2,3,4,5,6,7,8,9,10 highpass 300 lowpass 8000 norm -3
    ffmpeg -i "$file" -af "afade=t=in:st=0:d=5, loudnorm" -f sox - | sox - -t wav - remix 1,2,3,4,5,6,7,8,9,10 | sox -t wav - "$output_dir/$filename-doomer-mix4.wav" remix 1,2,3,4,5,6,7,8,9,10 highpass 300 lowpass 10000 norm -3
    ffmpeg -i "$file" -af "afade=t=in:st=0:d=5, loudnorm" -f sox - | sox - -t wav - remix 1,2,3,4,5,6,7,8,9,10 | sox -t wav - "$output_dir/$filename-doomer-mix5.wav" remix 1,2,3,4,5,6,7,8,9,10 highpass 300 lowpass 12000 norm -3
done

```

In this script, you can set the input and output directories, and the script will loop through all audio files in the input directory and generate multiple versions of the doomer mix using ffmpeg and sox. The script generates 5 different versions of the doomer mix with different lowpass filters and saves them in the output directory. You can modify the script to generate more or fewer versions of the doomer mix and adjust the lowpass filters according to your needs.

Once you have generated the doomer mixes, you can manually choose the best version for each audio file. I hope this helps! Let me know if you have any questions.
