document.getElementById("year").textContent = String(new Date().getFullYear());

const langBtn = document.getElementById("langBtn");

const dict = {
  ru: {
    chipDiscord: "Discord",
    chipTelegram: "Telegram",
    chipEmail: "Email",


    kicker: "Командный voice без лишних движений",
    titleA: "Подключайся к войсу",
    titleB: "автоматически",
    titleC: "в начале матча",
    lead: "RiftTalk создаёт голосовой канал команды в Discord при старте игры в League of Legends и аккуратно удаляет всё после матча.",

    downloadBtn: "Скачать RiftTalk (Windows)",
    srcLink: "исходный код",
    buildLink: "репозиторий сборок",

    howTitle: "Как RiftTalk работает",
    howSub: "Никакой магии — просто аккуратная автоматизация вокруг Discord и статуса матча.",

    how1t: "Привязка Discord",
    how1d: "Вы авторизуетесь через официальный Discord OAuth. Пароль Discord приложение не запрашивает.",

    how2t: "Старт матча",
    how2d: "В момент начала игры создаются временные голосовые каналы и выдаются роли/доступы игрокам команды.",

    how3t: "Автоочистка",
    how3d: "После окончания матча пользователи выводятся из каналов, роли снимаются, временные каналы удаляются.",

    noteT: "Важно:",
    noteB: "Скачивайте RiftTalk только по ссылкам с GitHub. Авторизация Discord проходит через официальный OAuth.",
    faqTitle: "FAQ",
    faqSub: "Ответы на частые вопросы.",
    faq1q: "Это безопасно? RiftTalk не просит пароль от Discord?",
    faq1a: "Да. Привязка происходит через официальный Discord OAuth. RiftTalk не запрашивает и не хранит ваш пароль Discord.",
    faq2q: "Почему меня не закидывает в голосовой канал?",
    faq2a: "Проверьте: приложение запущено до начала матча, Discord запущен и вы вошли в аккаунт, аккаунт привязан, вы на нужном Discord-сервере.",
    faq3q: "Когда создаются и удаляются каналы?",
    faq3a: "Каналы создаются в момент начала игры. После окончания матча пользователи выводятся из каналов, роли снимаются, временные каналы удаляются.",
    faq4q: "Нужно ли устанавливать что-то дополнительно?",
    faq4a: "Нет. Достаточно запустить RiftTalk и иметь установленный Discord и League of Legends.",
    faq5q: "Windows показывает предупреждение безопасности. Это нормально?",
    faq5a: "Да, иногда Windows/SmartScreen может показывать предупреждение для приложений, которые распространяются не через Microsoft Store. Скачивайте RiftTalk только по официальным ссылкам GitHub и запускайте, если доверяете источнику.",
    riotDisclaimer: "RiftTalk не поддерживается Riot Games и не отражает взгляды Riot Games или кого-либо, кто официально участвует в создании или управлении League of Legends. League of Legends™ и Riot Games являются товарными знаками или зарегистрированными товарными знаками Riot Games, Inc.",
    discordDisclaimer: "RiftTalk не поддерживается Discord и не отражает взгляды Discord. Discord и логотип Discord являются товарными знаками или зарегистрированными товарными знаками Discord Inc.",
  },
  en: {
    chipDiscord: "Discord",
    chipTelegram: "Telegram",
    chipEmail: "Email",

    kicker: "Team voice without extra steps",
    titleA: "Join voice",
    titleB: "automatically",
    titleC: "when the match starts",
    lead: "RiftTalk creates a team voice channel in Discord when your League of Legends match starts and cleans everything up after the game.",

    downloadBtn: "Download RiftTalk (Windows)",
    srcLink: "source code",
    buildLink: "builds repo",

    howTitle: "How RiftTalk works",
    howSub: "No magic — just careful automation around Discord and match status.",

    how1t: "Link Discord",
    how1d: "Authorization uses official Discord OAuth. RiftTalk never asks for your Discord password.",

    how2t: "Match start",
    how2d: "When the game starts, temporary voice channels are created and roles/permissions are granted to your team.",

    how3t: "Auto cleanup",
    how3d: "After the match ends, users are removed from channels, roles are revoked, and temporary channels are deleted.",

    noteT: "Note:",
    noteB: "Download RiftTalk only from GitHub links. Discord authorization uses official OAuth.",

    faqTitle: "FAQ",
    faqSub: "Answers to common questions.",
    faq1q: "Is it safe? Does RiftTalk ask for my Discord password?",
    faq1a: "Yes. Linking uses official Discord OAuth. RiftTalk never asks for or stores your Discord password.",
    faq2q: "Why am I not being moved to the voice channel?",
    faq2a: "Check: the app is running before the match starts, Discord is running and logged in, your account is linked, and you are on the correct Discord server.",
    faq3q: "When are channels created and removed?",
    faq3a: "Channels are created when the game starts. After the match ends, users are removed, roles are revoked, and temporary channels are deleted.",
    faq4q: "Do I need to install anything else?",
    faq4a: "No. Just run RiftTalk and have Discord and League of Legends installed.",
    faq5q: "Windows shows a security warning. Is this normal?",
    faq5a: "Yes. Windows/SmartScreen may warn about apps distributed outside the Microsoft Store. Download RiftTalk only from the official GitHub links and run it only if you trust the source.",
    riotDisclaimer: "RiftTalk is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends™ and Riot Games are trademarks or registered trademarks of Riot Games, Inc.",
    discordDisclaimer: "RiftTalk is not endorsed by Discord and does not reflect the views or opinions of Discord. Discord and the Discord logo are trademarks or registered trademarks of Discord Inc.",
  },
};

let current = "ru";

function applyLang(lang) {
  current = lang;
  document.documentElement.lang = lang === "ru" ? "ru" : "en";
  langBtn.textContent = lang === "ru" ? "RU" : "EN";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[lang][key];
    if (typeof val === "string") el.textContent = val;
  });
}

langBtn.addEventListener("click", () => {
  applyLang(current === "ru" ? "en" : "ru");
});

applyLang("ru");
