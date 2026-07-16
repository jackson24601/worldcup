# World Cup

A simple World Cup soccer game.

## Play

Open **https://jackson24601.github.io/worldcup/**

If the page looks blank, hard-refresh (Ctrl+Shift+R / Cmd+Shift+R) — an older cached build may still be stuck in the browser.

## Screens

1. **Landing** — soccer pitch background with a **Play!** button and basic controls (move, shoot, pass, slide tackle)
2. **Team select** — choose England, USA, France, Mexico, Japan, Australia, Brazil, or Argentina
3. **Quarterfinals** — random opponent matchup with flags, then **Kickoff!!!!**
4. **Game** — 4v4 match (3 field players + goalie). Arrow keys move; hold an arrow and press Space to pass that way; Space alone shoots. On defense, hold a direction and press **Shift** to slide tackle — that’s the only way to take the ball; otherwise players bump and possession stays put.
5. **Semifinals** — after a quarterfinal win, press **Semifinals!!!!** to face a new opponent from the four remaining teams (never the team you just beat). Same match rules, but the AI is faster and more aggressive.

### Match rules

- Coin flip decides who starts with the ball
- Two halves of two minutes and thirty seconds each
- Score and clock sit in boxes at the bottom of the screen
- Quarterfinal player movement is a bit slower; AI is slower than you, but attacks: keeper clears quickly, field players pass, press, and try to score
- On defense, press **Shift** with a direction to slide tackle and win the ball; standing contact only bumps players and leaves possession unchanged
- Win the quarterfinals to see fireworks and advance to the semifinals
- Semifinal AI moves faster and presses harder — still beatable, but tougher than the quarters
