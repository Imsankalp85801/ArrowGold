export function scrollToView(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
}