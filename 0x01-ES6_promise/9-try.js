export default function guardrail(mathFunction) {
    const queue = [];
    try {
        queue.push(mathFunction());
    } catch (er) {
        queue.push(`Error: ${er.message}`);
    } finally {
        queue.push("Guardrail was processed");
    }
    return queue;
}
