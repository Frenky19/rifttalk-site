import { useMemo, useState } from "react";

const REPO_OWNER = "Frenky19";
const REPO_NAME = "RiftTalk-Desktop-App";
const ASSET_NAME = "RiftTalk.zip";

const DOWNLOAD_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/archive/refs/tags/${ASSET_NAME}`;

const texts = {
  ru: {
    title: "RiftTalk",
    subtitle:
      "Автоматический командный voice в Discord для League of Legends. Запусти приложение → начни матч → общайся. Каналы создаются и удаляются автоматически.",
    download: "Скачать для Windows",
    howItWorks: "Как это работает",
    featuresTitle: "Возможности",
    stepsTitle: "3 шага до войса",
    // galleryTitle: "Скриншоты",
    faqTitle: "FAQ",
    securityTitle: "Безопасность",
    features: [
      { t: "Автоканалы Blue/Red", d: "Создаёт голосовой канал команды в момент начала матча." },
      { t: "Автоочистка после матча", d: "Каналы удаляются, роли/доступы снимаются." },
      { t: "Встроенный интерфейс", d: "Не нужен браузер — всё внутри приложения." },
      { t: "Strict mode", d: "Никакой демо-логики в боевом режиме." },
    ],
    steps: [
      { t: "Привяжи Discord", d: "Нажми «Привязать через Discord» и заверши авторизацию." },
      { t: "Запусти LoL и начни матч", d: "Приложение должно быть запущено до старта игры." },
      { t: "Подключись к каналу команды", d: "На старте матча тебя автоматически закинет в войс." },
    ],
    faq: [
      { q: "Почему Windows ругается на SmartScreen / Unknown Publisher?", a: "Если сборка подписана self-signed сертификатом — предупреждение ожидаемо. Нажми «Подробнее» → «Выполнить в любом случае»." },
      { q: "Почему не закинуло в канал?", a: "Проверь: приложение запущено до матча, Discord запущен, аккаунт привязан, ты на нужном сервере." },
      { q: "Нужно ли держать Discord открытым?", a: "Да, рекомендуется запускать Discord перед игрой." },
    ],
    security: [
      "Приложение не просит пароль от Discord — авторизация проходит через официальный OAuth.",
      "Скачивание ведёт на GitHub Releases (последняя версия).",
      "Можно публиковать SHA256-хеш релиза для дополнительного доверия.",
    ],
    footer: "© 2026 RiftTalk",
  },
  en: {
    title: "RiftTalk",
    subtitle:
      "Automatic team voice in Discord for League of Legends. Launch the app → start a match → talk. Channels are created and removed automatically.",
    download: "Download for Windows",
    howItWorks: "How it works",
    featuresTitle: "Features",
    stepsTitle: "3 steps to voice",
    // galleryTitle: "Screenshots",
    faqTitle: "FAQ",
    securityTitle: "Security",
    features: [
      { t: "Auto Blue/Red channels", d: "Creates your team voice channel when the match starts." },
      { t: "Auto cleanup", d: "Removes channels and roles after the match ends." },
      { t: "Built-in UI", d: "No browser needed — everything is inside the app." },
      { t: "Strict mode", d: "No demo logic in production mode." },
    ],
    steps: [
      { t: "Link Discord", d: "Click “Link via Discord” and finish authorization." },
      { t: "Start LoL and queue", d: "The app must be running before the match starts." },
      { t: "Join your team voice", d: "You’ll be moved automatically at match start." },
    ],
    faq: [
      { q: "Why does Windows show SmartScreen/Unknown Publisher?", a: "If the build is self-signed, this warning is expected. Click “More info” → “Run anyway”." },
      { q: "I wasn’t moved to voice — why?", a: "Check: app is running before the match, Discord is running, account is linked, you’re on the correct server." },
      { q: "Should Discord be opened?", a: "Yes — recommended to keep Discord running." },
    ],
    security: [
      "No Discord password is requested — OAuth is used.",
      "Download points to GitHub Releases (latest version).",
      "You can publish SHA256 in releases for extra trust.",
    ],
    footer: "© 2026 RiftTalk",
  },
};

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur p-6">
      {children}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("ru");
  const t = useMemo(() => texts[lang], [lang]);

  const shots = [
    // "/screens/ui-1.png",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900">
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
          <div className="font-semibold">{t.title}</div>
        </div>

        <div className="flex items-center gap-3">
          <select
            className="rounded-xl border border-black/10 bg-white px-3 py-2"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>

          <a
            className="rounded-xl border border-black/10 bg-white px-4 py-2 hover:bg-slate-50"
            href={`https://github.com/${REPO_OWNER}/${REPO_NAME}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <section className="pt-10 pb-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {t.title}
              </h1>
              <p className="mt-4 text-lg text-slate-700">{t.subtitle}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={DOWNLOAD_URL}
                  className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium hover:opacity-90"
                >
                  {t.download}
                </a>
                <a
                  href="#how"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-3 font-medium hover:bg-slate-50"
                >
                  {t.howItWorks}
                </a>
              </div>

              <p className="mt-3 text-sm text-slate-500">
                Windows 10/11 • Discord • League Client • GitHub Releases
              </p>
            </div>

            <Card>
              <div className="text-sm text-slate-500 mb-2">Preview</div>
              <img
                src={shots[0]}
                alt="RiftTalk UI"
                className="rounded-xl border border-black/10"
              />
            </Card>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold">{t.featuresTitle}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {t.features.map((f) => (
              <Card key={f.t}>
                <div className="text-lg font-semibold">{f.t}</div>
                <div className="mt-2 text-slate-700">{f.d}</div>
              </Card>
            ))}
          </div>
        </section>

        <section id="how" className="py-10">
          <h2 className="text-2xl font-semibold">{t.stepsTitle}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {t.steps.map((s, idx) => (
              <Card key={s.t}>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-semibold">
                    {idx + 1}
                  </div>
                  <div className="font-semibold">{s.t}</div>
                </div>
                <div className="mt-3 text-slate-700">{s.d}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold">{t.galleryTitle}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {shots.map((src) => (
              <div key={src} className="rounded-2xl border border-black/10 bg-white/70 p-3">
                <img src={src} alt="Screenshot" className="rounded-xl" />
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold">{t.securityTitle}</h2>
          <Card>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              {t.security.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Card>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold">{t.faqTitle}</h2>
          <div className="mt-5 grid gap-4">
            {t.faq.map((item) => (
              <Card key={item.q}>
                <div className="font-semibold">{item.q}</div>
                <div className="mt-2 text-slate-700">{item.a}</div>
              </Card>
            ))}
          </div>
        </section>

        <footer className="pt-10 text-sm text-slate-500">
          {t.footer}
        </footer>
      </main>
    </div>
  );
}
