import { openInNewTab } from "@/utils";

const action = (column) => {
    const links = column
        .split("\n")
        .filter((line) => line !== "")
        .map(
            (id) => `https://gomer.rozetka.company/goods/item/update?id=${id}/`,
        );
    openInNewTab(links);
};
export const openInFlanders = {
    buttonColor: "primary",
    buttonTitle: "Відкрити",
    buttonIcon: "open",
    placeholder: "Сюди треба ввести id товарів",
    radioGroup: null,
    action,
};
