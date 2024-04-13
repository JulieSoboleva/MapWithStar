export default class Settings {
    constructor({theme = null, music = null, difficulty = null}) {
        this.preferences = new Map();
        this.preferences.set('theme', 'dark');
        this.preferences.set('music', 'trance');
        this.preferences.set('difficulty', 'easy');

        this.userPreferences = new Map();
        if (theme) {
            this.userPreferences.set('theme', theme);
        }
        if (music) {
            this.userPreferences.set('music', music);
        }
        if (difficulty) {
            this.userPreferences.set('difficulty', difficulty);
        }
    }

    settings() {
        this.userPreferences.forEach((value, key) => {
            this.preferences.set(key, value);
        });
        return this.preferences;
    }
}