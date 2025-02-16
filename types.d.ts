// types.d.ts

export interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
}

declare global {
    interface TelegramWebApp {
        initDataUnsafe: {
            user: TelegramUser;
            // add other properties if needed
        };
        onEvent: (eventType: 'backButtonClicked' | string, callback: () => void) => void;
        offEvent: (eventType: 'backButtonClicked' | string, callback: () => void) => void;
        BackButton: {
            show: () => void;
            hide: () => void;
        };
    }

    interface Telegram {
        WebApp: TelegramWebApp;
    }

    interface Window {
        Telegram: Telegram;
    }
}

// This ensures the file remains a module.
export {};
