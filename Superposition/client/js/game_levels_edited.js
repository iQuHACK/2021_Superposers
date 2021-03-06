/* eslint-disable */
var GAME_LEVELS = [
    /*Tutorial 1: Entanglement. 50%->00, 50%->11 */
  ["  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x              HHHHHHHHHHHHHHH          111111111111111                    x  ",
   "  x                                                                      o   x  ",
   "  x  @                                                                       x  ",
   "  xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx  ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],

   /*Tutorial 2: Control Z. 25%->00, 25%->01, 25%->10, 25%->11 */
  ["  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                            xxxxxxxxxxxxxxx               x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                            111111111111111                               x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x          HHHHHHHHHHHHHHH                   HHHHHHHHHHHHHHH               x  ",
   "  x                                                                      o   x  ",
   "  x  @                                                                       x  ",
   "  xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx  ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],

   /*Tutorial 3: Ramsey X. P-gate: 2*pi/3, 25%->00 75%->01 */
  ["  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                             PPPPPPPPPPPPPPP                              x  ",
   "  x        HHHHHHHHHHHHHHH                                                   x  ",
   "  x @                                                                        x  ",
   "  xxxxxxxx                                                                   x  ",
   "  x      x                                                                   x  ",
   "  x      x                HHHHHHHHHHHHHHH        xxxxxxxxxxxxxxx             x  ",
   "  x      x                                                                   x  ",
   "  x      x                                                                   x  ",
   "  x      x                                                               o   x  ",
   "  x      x                                                                   x  ",
   "  xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx  ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],

   /*Tutorial 4: SWAP */
   /*Easy path: 50%. Hard path: 100%. */
  ["  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x        HHHHHHHHHHHHHHH                   Z                               x  ",
   "  x @                                 000000000000000                        x  ",
   "  xxxxxxxx                                                                   x  ",
   "  x      x                        O                                          x  ",
   "  x      x                111111111111111        111111111111111             x  ",
   "  x      x                                                                   x  ",
   "  x      x                                                                   x  ",
   "  x      x                                                               o   x  ",
   "  x      x                                                                   x  ",
   "  xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx  ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],   

   /*Tutorial 5: Obstacle Course. 25%->0, 75%->1 */
   /*Easy path: 50%. Hard path: 100%. */
   /* = is a wall that moves down 6 units, then goes back to the start */
   /* G is a goomba that moves right 10 units, then left 10 units, etc. */
  ["  x                                               =                          x  ",
   "  x                                               =                          x  ",
   "  x                                               =                          x  ",
   "  x                                               =                          x  ",
   "  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                               G                                          x  ",
   "  x                             PPPPPPPPPPPPPPP    HHHHHHHHHHHHHH            x  ",
   "  x        HHHHHHHHHHHHHHH                                                   x  ",
   "  x @                                                                        x  ",
   "  xxxxxxxx                                                                   x  ",
   "  x      x                                    xxxxxxxxxxxxxxx                x  ",
   "  x      x                                                                   x  ",
   "  x      x                                                                   x  ",
   "  x      x                                                                   x  ",
   "  x      x                                                               o   x  ",
   "  x      x                                                                   x  ",
   "  xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx  ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],

   /* Level 1: W state. 50%->001, 25%->010, 25%->100 */
   /*Easy path: 75%. Hard path: 100%. */
   /* Params: pi/2 for all */
  ["  x                              =                       =                   x  ",
   "  x                              =                       =                   x  ",
   "  x                              =                       =                   x  ",
   "  x                              =                       =                   x  ",
   "  x                              =                       =                   x  ",
   "  x                              =                                           x  ",
   "  x                                                                          x  ",
   "  x             G                                         NNNNNNNNNNNNNNN    x  ",
   "  x           YYYYYYYYYYYYYYY               O                                x  ",
   "  x @                                   111111111111111                      x  ",
   "  xxxxxxxx                                                                   x  ",
   "  x      x                           Z                                       x  ",
   "  x      x                222222222222222        222222222222222             x  ",
   "  x      x                                                                   x  ",
   "  x      x            O                                                      x  ",
   "  x      x UUUUUUUUUUUUUUU                                               o   x  ",
   "  x      x                                                                   x  ",
   "  xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx  ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],

   /*Level 2: Backtracking. 50%->000, 50%->111 */
  ["  x                                                                          x  ",
   "  x                                                                          x  ",
   "  x                      xxxxxxxxxxxxxxx                                     x  ",
   "  x                                                                          x  ",
   "  x     G                                                                    x  ",
   "  x   111111111111111          NNNNNNNNNNNNNNN     xxxxxxxxxxxxxxx           x  ",
   "  x                                                                          x  ",
   "  x               G                                                          x  ",
   "  x             HHHHHHHHHHHHHHH              1                               x  ",
   "  x @                               SSSSSSSSSSSSSSS                          x  ",
   "  xxxxxxxx                                                                   x  ",
   "  x      x              xxxxxxxxxxxxxxx          G                           x  ",
   "  x      x    G                                sssssssssssssss               x  ",
   "  x      x  22222222222222                                                   x  ",
   "  x      x                                                                   x  ",
   "  x      x                                                               o   x  ",
   "  x      x                                                                   x  ",
   "  xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx  ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],

   /*Level 3: Loooong. 50%->000, 50%->111 */
   /*               */
  ["  x                                          =                                Z                                                       =                  x  ",
   "  x                                          =                      111111111111111              111111111111111                      =                  x  ",
   "  x                         G                =            Z                                                                           =                  x  ",
   "  x                       111111111111111    =      22222222222222                           O                                        =                  x  ",
   "  x                                          =                                    000000000000000              SSSSSSSSSSSSSSS        =                  x  ",
   "  x                                          =                                                                                                           x  ",
   "  x                      Z                                                                                                                               x  ",
   "  x          HHHHHHHHHHHHHHH                                        =                                                                                    x  ",
   "  x                                                                 =                                                                                    x  ",
   "  x @                                                               =                                                                                    x  ",
   "  xxxxxxxx                                          G               =                                                                                    x  ",
   "  x      x                                        xxxxxxxxxxxxxxx          xxxxxxxxxxxxxxx                                                               x  ",
   "  x      x                                                                                                          xxxxxxxxxxxxxxx                      x  ",
   "  x      x                                                                                      G                                                        x  ",
   "  x      x                                                                                    xxxxxxxxxxxxxxx                                            x  ",
   "  x      x                                                                                                                                           o   x  ",
   "  x      x                                                                                                                                               x  ",
   "  xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx  ",
   "                                                                                                                                                            ",
   "                                                                                                                                                            ",
   "                                                                                                                                                            ",
   "                                                                                                                                                            ",
   "                                                                                                                                                            ",
   "                                                                                                                                                            "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
