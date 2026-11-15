import { Markdown } from "@/components/markdown/markdown";

/**
 * Rendu Markdown + KaTeX pendant un flux.
 *
 * Pendant la réponse, seuls les blocs terminés (séparés par une ligne vide)
 * passent par Markdown/KaTeX. Le bloc en cours reste du texte brut : une
 * formule à moitié reçue n'est jamais interprétée, puis re-rendue à chaque
 * morceau, ce qui évite le clignotement. À la fin du flux, tout est rendu
 * normalement.
 */
export function StreamingMarkdown({
  content,
  streaming,
  compact = false,
}: {
  content: string;
  streaming: boolean;
  compact?: boolean;
}) {
  if (!streaming) return <Markdown compact={compact}>{content}</Markdown>;

  const cut = content.lastIndexOf("\n\n");
  const stable = cut > 0 ? content.slice(0, cut) : "";
  const tail = cut > 0 ? content.slice(cut) : content;

  return (
    <>
      {stable && <Markdown compact={compact}>{stable}</Markdown>}
      {tail && (
        <div className="prose-etude whitespace-pre-wrap text-[0.94rem] leading-[1.7]">
          {tail}
        </div>
      )}
    </>
  );
}
