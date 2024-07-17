import { CustomOptions } from "@/types/navigation";

type DrawerOption = CustomOptions & {
  name: string;
};

export const drawerOptions: DrawerOption[] = [
  {
    name: "(tabs)",
    title: "Todas as caixas de entrada",
    iconName: "all-inbox",
    isDivider: true,
    notifications: 5,
  },
  {
    name: "inbox",
    title: "Entrada",
    iconName: "inbox",
    isDivider: true,
    notifications: 3,
  },
  {
    name: "stars",
    title: "Com estrelas",
    iconName: "star-outline",
  },
  {
    name: "postponed",
    title: "Adiados",
    iconName: "schedule",
  },
  {
    name: "important",
    title: "Importante",
    iconName: "label-important-outline",
  },
  {
    name: "send",
    title: "Enviado",
    iconName: "send",
  },
  {
    name: "programmed",
    title: "Programado",
    iconName: "schedule-send",
  },
  {
    name: "exit-box",
    title: "Caixa de saída",
    iconName: "outbox",
  },
  {
    name: "draft",
    title: "Rascunhos",
    iconName: "note",
  },
  {
    name: "all-emails",
    title: "Todos os e-mails",
    iconName: "email",
  },
  {
    name: "spam",
    title: "Spam",
    iconName: "info-outline",
  },
  {
    name: "trash",
    title: "Lixeira",
    iconName: "delete-outline",
  },
  {
    name: "read",
    title: "Lidos",
    iconName: "label-important-outline",
    sectionTitle: "Marcadores",
  },
  {
    name: "general",
    title: "Geral",
    iconName: "label-important-outline",
    isDivider: true,
  },
  {
    name: "new-marker",
    title: "Criar novo",
    iconName: "add",
    isDivider: true,
  },
  {
    name: "settings",
    title: "Configurações",
    iconName: "settings",
  },
  {
    name: "feedback",
    title: "Feedback",
    iconName: "feedback",
    isDivider: true,
    notifications: 5,
  },
  {
    name: "help",
    title: "Ajuda",
    iconName: "help-outline",
  },
];
