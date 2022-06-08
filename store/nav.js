export const state = () => ({
    currentSection:"landing"
});

export const mutations = {
    updateSection(state, section) {
        state.currentSection = section;
    }
}