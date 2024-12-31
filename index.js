// Previous JavaScript code remains the same
      const messages = [
        "Kamu adalah Wanitaku. 💝",
        "Jangan lupa istirahat ya sayang, jangan terlalu lelah~ 🌟",
        "Aku bangga sama semua usahamu! ✨",
        "Ingat makan siang ya! Jaga kesehatan selalu 🍱",
        "Kamu sudah bekerja sangat keras hari ini! 💪",
        "Jangan lupa minum air putih ya sayangku! 💧",
        "Semangat terus! Aku selalu mendukungmu 🥰",
        "Kamu adalah alasan aku tersenyum setiap hari! 😊",
        "Jangan lupa untuk tersenyum hari ini ya! ✨",
        "Kamu adalah orang terhebat yang pernah aku temui! ❤️",
        "Dan Kamu juga adalah pasanganku yang pintar dan imut ❤️❤️❤️",
      ];

      function sendLove() {
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            const heart = document.createElement("div");
            heart.className = "floating-hearts";
            heart.innerHTML = ["❤️", "💖", "💕", "💗"][
              Math.floor(Math.random() * 4)
            ];
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${1.5 + Math.random()}s`;
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 2000);
          }, i * 100);
        }
      }

      function showMessage() {
        const container = document.getElementById("message-container");
        const message = document.createElement("p");
        message.style.opacity = "0";
        message.style.transform = "translateY(20px)";
        message.style.transition = "all 0.5s ease";
        message.innerHTML =
          messages[Math.floor(Math.random() * messages.length)];

        if (container.children.length > 2) {
          container.removeChild(container.firstChild);
        }

        container.appendChild(message);
        requestAnimationFrame(() => {
          message.style.opacity = "1";
          message.style.transform = "translateY(0)";
        });
      }

      function trackMood(mood) {
        const container = document.getElementById("message-container");
        const message = document.createElement("p");
        message.style.opacity = "0";
        message.style.transform = "translateY(20px)";
        message.style.transition = "all 0.5s ease";
        message.innerHTML = `Mood kamu hari ini: ${mood}`;

        if (container.children.length > 2) {
          container.removeChild(container.firstChild);
        }

        container.appendChild(message);
        requestAnimationFrame(() => {
          message.style.opacity = "1";
          message.style.transform = "translateY(0)";
        });

        showEmoji();
      }

      function showEmoji() {
        const emojis = ["✨", "💖", "🌟", "💕", "🎈", "🌸", "💝", "✨"];
        for (let i = 0; i < 12; i++) {
          setTimeout(() => {
            const emoji = document.createElement("div");
            emoji.className = "emoji-rain";
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = `${Math.random() * 100}vw`;
            emoji.style.animationDuration = `${2 + Math.random() * 2}s`;
            document.body.appendChild(emoji);

            setTimeout(() => emoji.remove(), 3000);
          }, i * 150);
        }
      }

      // Initial animation
      showEmoji();
