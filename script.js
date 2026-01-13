const year = document.getElementById("year");
year.textContent = String(new Date().getFullYear());

const langBtn = document.getElementById("langBtn");

const dict = {
  ru: {
    kicker: "Командный voice без лишних движений",
    title: "Автоматический голосовой чат в Discord для League of Legends",
    lead:
      "Запусти RiftTalk → начни матч → общайся с командой. В момент начала игры создаётся голосовой канал команды, а после матча всё аккуратно удаляется.",
    download: "Скачать для Windows",
    howBtn: "Как это работает",
    meta1: "Windows 10/11",
    meta2: "Discord OAuth",
    meta3: "Авто-каналы",
    source: "Исходный код (GitHub)",
    releases: "Репозиторий сборок",
    caption: "Один запуск — и дальше всё происходит автоматически.",

    howTitle: "Как RiftTalk работает",
    howSub:
      "Никакой магии — просто аккуратная автоматизация вокруг Discord и статуса матча.",
    how1t: "Привязка Discord",
    how1d:
      "Вы авторизуетесь через официальный Discord OAuth. Пароль Discord приложение не запрашивает.",
    how2t: "Старт матча",
    how2d:
      "В момент начала игры создаются временные голосовые каналы и выдаются роли/доступы игрокам команды.",
    how3t: "Автоочистка",
    how3d:
      "После окончания матча пользователи выводятся из каналов, роли снимаются, временные каналы удаляются.",

    dlTitle: "Скачать RiftTalk",
    dlSub: "Скачивание ведёт на архив тега в GitHub.",
    dlBtn: "Скачать RiftTalk.zip",
    dlSrc: "Открыть исходники",
    noteT: "Важно:",
    noteB:
      "Если Windows покажет предупреждение безопасности, это нормально для не-магазинных приложений. Скачивайте только из официальных ссылок выше.",

    faqTitle: "FAQ",
    faq1q: "Почему не закидывает в голосовой канал?",
    faq1a:
      "Проверьте: приложение запущено до начала матча, Discord запущен и вы вошли в аккаунт, Discord привязан, вы на нужном сервере.",
    faq2q: "Нужно ли держать Discord открытым?",
    faq2a:
      "Да, рекомендуется запускать Discord перед игрой и не закрывать во время матча.",
    faq3q: "Где посмотреть исходный код?",
    faq3a:
      "Исходники доступны на GitHub: ссылка есть вверху страницы и в блоке скачивания.",
  },

  en: {
    kicker: "Team voice without extra steps",
    title: "Automatic Discord voice chat for League of Legends",
    lead:
      "Launch RiftTalk → start a match → talk to your team. A team voice channel is created at match start, and everything is cleaned up after the game.",
    download: "Download for Windows",
    howBtn: "How it works",
    meta1: "Windows 10/11",
    meta2: "Discord OAuth",
    meta3: "Auto channels",
    source: "Source code (GitHub)",
    releases: "Builds repository",
    caption: "One launch — then it just works.",

    howTitle: "How RiftTalk works",
    howSub:
      "No magic — just careful automation around Discord and match status.",
    how1t: "Link Discord",
    how1d:
      "Authorization uses official Discord OAuth. No Discord password is requested.",
    how2t: "Match start",
    how2d:
      "When the game starts, temporary voice channels are created and roles/permissions are granted.",
    how3t: "Auto cleanup",
    how3d:
      "After the match ends, users are removed from channels, roles are revoked, and temporary channels are deleted.",

    dlTitle: "Download RiftTalk",
    dlSub: "Download points to a GitHub tag archive.",
    dlBtn: "Download RiftTalk.zip",
    dlSrc: "Open source code",
    noteT: "Note:",
    noteB:
      "If Windows shows a security warning, it can be normal for non-store apps. Download only from the official links above.",

    faqTitle: "FAQ",
    faq1q: "Why wasn’t I moved to the voice channel?",
    faq1a:
      "Check: the app is running before the match, Discord is running and logged in, your account is linked, and you are on the correct server.",
    faq2q: "Should Discord be opened?",
    faq2a:
      "Yes — recommended to keep Discord running during the match.",
    faq3q: "Where is the source code?",
    faq3a:
      "Source is on GitHub — links are available at the top and in the download section.",
  },
};

let current = "ru";

function applyLang(lang) {
  current = lang;
  document.documentElement.lang = lang === "ru" ? "ru" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[lang][key];
    if (typeof val === "string") el.textContent = val;
  });

  langBtn.textContent = lang === "ru" ? "RU / EN" : "EN / RU";
}

langBtn.addEventListener("click", () => {
  applyLang(current === "ru" ? "en" : "ru");
});

applyLang("ru");
