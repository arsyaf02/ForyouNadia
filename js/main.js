let replyIndex = 0;
let contentPlayed = false;

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const messageText = input.value.trim();

  if (messageText !== "") {
    // Menampilkan pesan user
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.textContent = messageText;
    chatBox.appendChild(userMessage);

    setTimeout(() => {
      // Menampilkan balasan bot
      const botReply = document.createElement("div");
      botReply.classList.add("message", "bot");
      const replyText = getBotReply();
      botReply.textContent = replyText;
      chatBox.appendChild(botReply);
      chatBox.scrollTop = chatBox.scrollHeight;

      // CEK: Jika balasan terakhir, tambahkan video YouTube
      if (
        replyText.includes(
          "Terima kasih ya udah baca ini. Semoga kamu selalu baik-baik aja, dan semesta selalu sayang sama kamu, Semoga kamu suka 🤍😊"
        ) &&
        !contentPlayed
      ) {
        contentPlayed = true;

        setTimeout(() => {
          // Menambahkan video YouTube
          const videoMessage = document.createElement("div");
          videoMessage.classList.add("message", "bot");
          videoMessage.innerHTML = `
            <div class="video-wrapper">
              <iframe width="100%" height="315" 
                src="https://www.youtube.com/embed/OqsM5kQYjTc?autoplay=1" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div>
          `;
          chatBox.appendChild(videoMessage);
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
      }
    }, 800);

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
  }
}

function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function getBotReply() {
  const replies = [
    "Hai, Nadia yang biasa dulu aku panggil Nanad 😊😉",
    "semoga kamu nggak keberatan aku datang tiba-tiba untuk mengucapkan selamat ulang tahun, dengan cara ini ya! 🎉",
    "Meskipun kita udah nggak lagi seperti dulu, aku ingin kamu tahu kalau aku masih selalu mendoakan kebahagiaan untukmu. Kamu itu punya aura positif yang nggak bisa aku lupain, dan sejujurnya, itu yang bikin aku kadang kangen. 🌸",
    "Selamat ulang tahun! 🎂 Semoga hari ini penuh dengan kebahagiaan yang layak kamu dapatkan. Kadang aku mikir, kenapa ya kamu bisa begitu mempesona tanpa harus berusaha? Hmm... Mungkin memang cuma kamu yang punya ‘rahasia’ itu. 😉",
    "Aku nggak tahu sekarang kamu sedang apa, atau apa yang terjadi dalam hidupmu, tapi aku berharap semuanya berjalan lancar. Kalau ada hal-hal berat yang kamu hadapi, semoga kamu kuat dan bisa melalui semuanya dengan bijaksana. Kamu selalu punya cara untuk tetap tenang dalam situasi apapun. 🧘‍♀️",
    "Ngomong-ngomong soal ulang tahun, aku yakin kamu pasti ada rencana spesial kan? Kalau nggak ada, aku bisa jadi rencana darurat kamu kok. Hehe, nggak usah terlalu serius ya, aku cuma bercanda. Tapi kalau kamu butuh teman untuk ngobrol, aku ada! 😊",
    "Aku tau ini bisa dibilang agak langsung, tapi aku pengin kamu tahu kalau aku sangat menghargai siapa kamu. Kamu itu punya kelebihan yang nggak bisa diduplikasi, yang bikin aku ngelihat kamu beda dari yang lain. Semoga setiap langkah kamu di tahun baru hidup ini selalu membawa kebahagiaan dan kedamaian. 💫",
    "Mungkin kita nggak lagi bersama, tapi aku nggak pernah berhenti menghormati kamu sebagai pribadi. Jadi kalau suatu saat kita bisa ngobrol lagi tanpa ada beban, aku akan senang banget. Ya, sekadar untuk ketawa bareng dan mengenang kenangan manis kita. 😌",
    "Liat kamu yang selalu penuh dengan kebijaksanaan dan ketenangan, bikin aku kadang mikir, kenapa dulu bisa semudah itu saling kenal. Apa kamu pernah ngerasa kita tuh punya koneksi yang lebih dari sekadar hubungan biasa? Hmm, pasti kamu tahu jawabannya. 😏",
    "Semoga aja ulang tahun kali ini jadi momen baru yang membawa semua yang baik untuk kamu. Aku sih berharap apapun yang kamu jalani sekarang bisa memberikan kebahagiaan dan kedamaian yang layak kamu dapatkan. Jangan terburu-buru, semuanya butuh proses kok. 🎁",
    "Aku tahu hidup kita memang nggak selalu berjalan seperti yang kita mau, tapi aku percaya kalau setiap hal yang kita lewati pasti punya pelajaran tersendiri. Semoga suatu hari nanti kita bisa ketemu lagi, dan bisa ngobrol dengan suasana yang lebih tenang, santai, dan tentunya penuh tawa. ☕",
    "Kalau nggak ketemu, nggak apa-apa. Toh, bisa mengenal kamu lewat cara ini juga udah suatu keberuntungan buat aku. Tapi, kalau suatu hari kita bisa bertemu lagi, aku cuma berharap suasananya tetap sama: santai, nyaman, dan menyenangkan. Tanpa beban, hanya kebahagiaan yang kita bagi. 🌷",
  ];

  if (replyIndex < replies.length) {
    return replies[replyIndex++];
  } else {
    return "Terima kasih ya udah baca ini. Semoga kamu selalu baik-baik aja, dan semesta selalu sayang sama kamu, Semoga kamu suka 🤍😊";
  }
}
