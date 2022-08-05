export default function ListEvo() {
    const list = ['Dengan bertarung melawan Pokemon lain.', 'Ikatan Pokemon bersama sang pemilik Pokemon.', 'Memberi Pokemon ramuan khusus.', 'Meningkatkan level Pokemon.'];

    return (
        <ol className="listevo">
            {list.map((lists, index) => (
                <li className="listevo" key={index}>{lists}</li>
            ))}
        </ol>
    );
}