import { world, server} from "@minecraft/server";

world.beforeEvents.playerBreakBlock.subscribe(event => {
  const player = event.player;
})
