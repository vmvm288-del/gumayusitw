"use client";

import { useRef, useState } from "react";
import FormField from "@/components/form/FormField";
export default function SubmitFormPage() {
 
    const [form, setForm] = useState({
  nickname: "",
  displayName: "",
  email: "",
  threads: "",
  instagram: "",
  title: "",
  description: "",
  badgeMethod: "pickup",
  organizerMessage: "",
  image: null as File | null,
  consent: false,
});
const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);
const fileInputRef = useRef<HTMLInputElement>(null);
const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  const target = e.target;
  const { name } = target;

  setForm((prev) => ({
    ...prev,
    [name]:
      target instanceof HTMLInputElement &&
      target.type === "checkbox"
        ? target.checked
        : target.value,
  }));
};
const handleSubmit = async () => {
  try {
    if (!form.nickname.trim()) {
      alert("請輸入稱呼。");
      return;
    }

    if (!form.displayName.trim()) {
      alert("請輸入公開署名。");
      return;
    }

    if (!form.email.trim()) {
      alert("請輸入 Email。");
      return;
    }

    if (!form.threads.trim() && !form.instagram.trim()) {
      alert("Threads 與 Instagram 至少填寫一項。");
      return;
    }

    if (!form.title.trim()) {
      alert("請輸入作品名稱。");
      return;
    }

    if (!form.image) {
      alert("請選擇投稿圖片。");
      return;
    }

    if (!form.consent) {
      alert("請先同意投稿聲明。");
      return;
    }

    setLoading(true);

    // File → Base64
    const imageBase64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;

        resolve(result.split(",")[1]);
      };

      reader.onerror = reject;

      reader.readAsDataURL(form.image!);
    });

    const response = await fetch("/api/submit", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        nickname: form.nickname,
        display_name: form.displayName,
        email: form.email,
        threads: form.threads,
        instagram: form.instagram,

        badge_method: form.badgeMethod,

        title: form.title,
        description: form.description,

        organizer_message: form.organizerMessage,

        consent: form.consent,

        image_name: form.image.name,
        image_type: form.image.type,
        image_base64: imageBase64,
      }),
    });

    const result = await response.json();

    if (!result.success) {

  switch (result.error) {

    case "email_already_submitted":
      throw new Error("此 Email 已完成投稿，每位參加者限投稿一次。");

    case "entries_full":
      throw new Error("投稿名額已滿，感謝您的支持。");

    case "submissions_closed":
      throw new Error("目前投稿尚未開放或已截止。");

    case "social_account_required":
      throw new Error("Threads 與 Instagram 至少需填寫一項。");

    case "consent_required":
      throw new Error("請先閱讀並同意投稿聲明。");

    case "missing_required_fields":
      throw new Error("請完整填寫所有必填欄位。");

    case "invalid_badge_method":
      throw new Error("請選擇徽章領取方式。");

    case "upload_folder_not_configured":
      throw new Error("圖片上傳設定異常，請聯絡主辦單位。");

    default:
      throw new Error("投稿失敗，請稍後再試。");

  }

}

    setSubmitted(true);

    setForm({
      nickname: "",
      displayName: "",
      email: "",
      threads: "",
      instagram: "",
      title: "",
      description: "",
      badgeMethod: "pickup",
      organizerMessage: "",
      image: null,
      consent: false,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

  } catch (error) {

    console.error(error);

    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("投稿失敗，請稍後再試。");
    }

  } finally {
    setLoading(false);
  }
};
if (submitted) {
  return (
    <main className="min-h-screen bg-[#f0b0a0] text-[#241f35]">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6">

        <div className="w-full border border-[#241f35]/20 bg-transparent p-12 text-center">

          <p className="text-xs uppercase tracking-[0.35em] opacity-50">
            PROJECT. AD98
          </p>

          <h1 className="mt-6 text-4xl font-bold">
            投稿成功
          </h1>

          <p className="mt-3 text-sm uppercase tracking-[0.3em] opacity-60">
            Submission Received
          </p>

          <p className="mt-10 leading-8 text-[#241f35]/75">
            您的作品已成功送出。<br />
            請耐心等候主辦團隊審核，<br />
            審核結果將以 Email 通知。
          </p>

          <a
            href="/projects/6th-anniversary"
            className="mt-12 inline-flex border border-[#241f35] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] transition hover:bg-[#241f35] hover:text-[#f0b0a0]"
          >
            返回活動首頁
          </a>

        </div>

      </div>
    </main>
  );
}
  return (
    <main className="min-h-screen bg-[#f0b0a0] text-[#241f35]">
      <div className="mx-auto max-w-5xl px-6 py-24">

        {/* Header */}
        <header className="border-b border-[#241f35]/20 pb-12">

          <p className="text-xs uppercase tracking-[0.35em] opacity-50">
            IDOL · PHOTO CONTEST
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-wide md:text-6xl">
            圖片投稿
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 opacity-70 md:text-base">
            Submit your original photograph for the PROJECT. AD98 fan photography exhibition.
          </p>

        </header>

        {/* Form */}
        <div className="mt-16 space-y-20">

         {/* Section 01 */}
<section>

  <p className="text-xs uppercase tracking-[0.35em] opacity-50">
    01
  </p>

  <h2 className="mt-3 text-3xl font-bold">
    基本資訊
  </h2>

  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#241f35]/70">
    請填寫投稿者基本資料，其中公開署名將顯示於展出作品、
    投票頁面及紀念留言筆記本封面。
  </p>

  <div className="mt-12 grid gap-12 md:grid-cols-2">

    <FormField
  label="稱呼"
  english="Nickname"
  required
  name="nickname"
  value={form.nickname}
  onChange={handleChange}
  helper="僅供主辦團隊聯絡使用，不會公開顯示。"
/>

    <FormField
  label="公開署名"
  english="Display Name"
  required
  name="displayName"
  value={form.displayName}
  onChange={handleChange}
  helper="將顯示於展出作品、投票頁面及紀念留言筆記本封面，不建議使用「匿名」。"
/>

    <FormField
  label="電子郵件"
  english="Email"
  required
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  helper="作為投稿結果通知及後續聯絡用途。"
/>

  <FormField
  label="Threads"
  english="Threads"
  name="threads"
  value={form.threads}
  onChange={handleChange}
  placeholder="@project.ad98"
  helper="方便主辦團隊與您聯繫及社群標記。"
/>

<FormField
  label="Instagram"
  english="Instagram"
  name="instagram"
  value={form.instagram}
  onChange={handleChange}
  placeholder="@project.ad98"
  helper="若沒有 Instagram 可留空。"
/>

  </div>

</section>

          {/* Section 02 */}
<section>

  <p className="text-xs uppercase tracking-[0.35em] opacity-50">
    02
  </p>

  <h2 className="mt-3 text-3xl font-bold">
    作品資訊
  </h2>

  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#241f35]/70">
    請填寫作品資訊並上傳投稿照片，每位參加者限投稿乙張作品。
  </p>

  <div className="mt-12 space-y-12">

    <FormField
  label="作品名稱"
  english="Title"
  required
  name="title"
  value={form.title}
  onChange={handleChange}
  helper="將顯示於展出作品及投票頁面。"
/>

    <div className="space-y-4">

      <div>
        <p className="text-lg font-semibold text-[#241f35]">
          作品介紹
        </p>

        <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#241f35]/65">
          DESCRIPTION
        </p>
      </div>

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        rows={5}
        className="
          w-full
          resize-none
          border
          border-[#241f35]/25
          bg-transparent
          p-5
          text-base
          outline-none
          transition
          focus:border-[#241f35]
        "
      />

      <p className="text-sm leading-7 text-[#241f35]/70">
        可分享拍攝當下的故事、心情或想對 Gumayusi 說的話。（選填）
      </p>

    </div>

    <div className="space-y-4">

      <div>
        <p className="text-lg font-semibold text-[#241f35]">
          投稿照片
          <span className="ml-1 text-[#d11422]">*</span>
        </p>

        <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#241f35]/65">
          PHOTO
        </p>
      </div>

      <label
        className="
          flex
          h-64
          cursor-pointer
          items-center
          justify-center
          border
          border-dashed
          border-[#241f35]/30
          transition-all
          duration-300
          hover:border-[#241f35]
        "
      >
        <input
        ref={fileInputRef}
  type="file"
  accept="image/png,image/jpeg,image/webp"
  className="hidden"
  onChange={(e) => {
    const file = e.target.files?.[0] ?? null;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));
    
  }}
/>

        <div className="text-center">

          <p className="text-5xl">
            +
          </p>

          <p className="mt-4 text-sm uppercase tracking-[0.3em]">
            Click to Upload
          </p>

          <p className="mt-3 text-sm text-[#241f35]/60">
            PNG / JPG / WEBP
          </p>

          <p className="mt-1 text-sm text-[#241f35]/60">
            300 dpi 以上，12 × 12 cm 內
          </p>

        </div>

      </label>
      {form.image && (
  <p className="mt-4 text-sm text-[#241f35]/70">
    已選擇：
    <span className="font-medium">
      {" "}
      {form.image.name}
    </span>
  </p>
)}

    </div>

  </div>

</section>

         {/* Section 03 */}
<section>

  <p className="text-xs uppercase tracking-[0.35em] opacity-50">
    03
  </p>

  <h2 className="mt-3 text-3xl font-bold">
    紀念徽章
  </h2>

  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#241f35]/70">
    若作品獲選展出，您將可獲得 PROJECT. AD98 紀念徽章乙枚，
    請選擇希望的領取方式。
  </p>

  <div className="mt-12 space-y-6">

    <label
      className="
        flex
        cursor-pointer
        items-start
        gap-4
        border
        border-[#241f35]/20
        p-6
        transition
        hover:border-[#241f35]/60
      "
    >
      <input
  type="radio"
  name="badgeMethod"
  value="pickup"
  checked={form.badgeMethod === "pickup"}
  onChange={handleChange}
  className="mt-1"
/>

      <div>

        <p className="font-semibold">
          活動期間現場領取
        </p>

        <p className="mt-2 text-sm leading-7 text-[#241f35]/70">
          可於 2026/09/05－09/09 活動期間，
          至咖啡廳現場向主辦團隊領取。
        </p>

      </div>

    </label>

    <label
      className="
        flex
        cursor-pointer
        items-start
        gap-4
        border
        border-[#241f35]/20
        p-6
        transition
        hover:border-[#241f35]/60
      "
    >
      <input
  type="radio"
  name="badgeMethod"
  value="mail"
  checked={form.badgeMethod === "mail"}
  onChange={handleChange}
  className="mt-1"
/>

      <div>

        <p className="font-semibold">
          活動結束後郵寄
        </p>

        <p className="mt-2 text-sm leading-7 text-[#241f35]/70">
          若選擇郵寄，
          將於活動結束後以 Email 聯繫您填寫收件資訊。
        </p>

      </div>

    </label>

  </div>

</section>

{/* Section 04 */}
<section>

  <p className="text-xs uppercase tracking-[0.35em] opacity-50">
    04
  </p>

  <h2 className="mt-3 text-3xl font-bold">
    留言給 PROJECT. AD98
  </h2>

  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#241f35]/70">
    若有任何想告訴主辦團隊的話，歡迎留下訊息。
    此欄位為選填，內容不會公開，僅供 PROJECT. AD98 團隊閱讀。
  </p>

  <div className="mt-12 space-y-4">

    <div>
      <p className="text-lg font-semibold text-[#241f35]">
        留言內容
      </p>

      <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#241f35]/65">
        MESSAGE
      </p>
    </div>

    <textarea
      name="organizerMessage"
      value={form.organizerMessage}
      onChange={handleChange}
      rows={7}
      placeholder="想對 PROJECT. AD98 說些什麼呢？"
      className="
        w-full
        resize-none
        border
        border-[#241f35]/25
        bg-transparent
        p-5
        text-base
        text-[#241f35]
        placeholder:text-[#241f35]/35
        outline-none
        transition-all
        duration-300
        focus:border-[#241f35]
      "
    />

    <p className="text-sm leading-7 text-[#241f35]/70">
      例如：對活動的期待、想和主辦分享的故事、建議或鼓勵，都歡迎留下。
    </p>

  </div>

</section>

{/* Section 05 */}
<section>

  <p className="text-xs uppercase tracking-[0.35em] opacity-50">
    05
  </p>

  <h2 className="mt-3 text-3xl font-bold">
    投稿聲明
  </h2>

  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#241f35]/70">
    投稿前請確認您已閱讀並同意投稿規則。
    主辦團隊僅於活動期間進行非營利展出及宣傳使用，
    若涉及著作權或侵權爭議，將由投稿者自行負責。
  </p>

  <div className="mt-12 rounded-xl border border-[#241f35]/20 p-8">

    <h3 className="text-lg font-semibold">
      著作權授權與聲明
    </h3>

    <div className="mt-6 space-y-4 text-sm leading-8 text-[#241f35]/75">

      <p>
        • 投稿者須保證擁有作品完整著作權，或已取得合法授權。
      </p>

      <p>
        • 同意授權 PROJECT. AD98 於活動期間進行非營利實體展出、
        投票頁面展示、官方社群宣傳及紀念留言筆記本封面製作。
      </p>

      <p>
        • 若作品涉及侵權、盜圖或其他著作權爭議，
        主辦團隊有權取消展出資格，
        相關法律責任由投稿者自行負責。
      </p>

    </div>

  </div>

  <label className="mt-10 flex cursor-pointer items-start gap-4">

    <input
  type="checkbox"
  name="consent"
  checked={form.consent}
  onChange={handleChange}
  className="mt-1"
/>

    <span className="text-sm leading-7 text-[#241f35]/80">
      我已閱讀並同意上述所有投稿規則，
      並保證所提供之照片為本人原創或已獲合法授權作品。
    </span>

  </label>

  <button
      type="button"
      onClick={handleSubmit}
      disabled={loading}
      className="
      mt-12
      flex
      items-center
      gap-4
      border
      border-[#241f35]
      px-10
      py-5
      text-sm
      font-semibold
      uppercase
      tracking-[0.25em]
      transition-all
      duration-300
      hover:bg-[#241f35]
      hover:text-[#f0b0a0]
    "
  >
   {loading ? "SUBMITTING..." : "SUBMIT ENTRY"}
<span>{loading ? "..." : "↗"}</span>
  </button>

</section>

      </div>
    </div>
  </main>
  )
}
