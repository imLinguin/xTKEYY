const config = document.querySelector(".config-area");

config.value = `
// ODBINDOWANIE USELESS PRZYCISKÓW
unbindall


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// LOAD
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo "Wpisz komendę <BINDY>, aby uzyskać wszystkie zbindowane przyciski."
echo " "
echo "Ostatnia aktualizacja: 10.11.21"
echo "Obecna wersja:         6.4.1"
echo "Autor konfigu:         xTKEYY"
echo "Sociale:               twitch.tv/xtk3yy"
echo "                       steamcommunity.com/id/xtk3yy"
echo " "
echo "Ostatnie zmiany:       - Małe fixy,"
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "
echo " "


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// KOLOR KONSOLI
log_color General ADFF2FFF
log_color Console ADFF2FFF

// KOLOR LOBBY
cl_color 6 6 6 6 6


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// HUD
cl_hud_background_alpha "0.000000"
cl_hud_bomb_under_radar "0"
cl_hud_color "9"
cl_hud_healthammo_style "1"
cl_hud_playercount_pos "1"
cl_hud_playercount_showcount "1"
cl_hud_radar_scale "1.300000"
hud_scaling "0.500000"
hud_showtargetid "0"
hud_takesshots "0"
cl_radar_always_centered "0"
cl_radar_icon_scale_min "0.400000"
cl_radar_rotate "0"
cl_radar_scale "0.600000"
cl_radar_square_with_scoreboard "1"
net_graph "1"
net_graphheight "9999 net_graph 1"
net_graphpos "2"
net_graphproportionalfont "1"


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//CELOWNIK AWP
cl_bobamt_lat 0.1
cl_bobamt_vert 0.1
cl_crosshair_sniper_width 2


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// VIEWMODEL
cl_viewmodel_shift_left_amt "0.500000"
cl_viewmodel_shift_right_amt "0.250000"
viewmodel_fov "68"
viewmodel_offset_x "2.5"
viewmodel_offset_y "2.0"
viewmodel_offset_z "-2.0"
viewmodel_presetpos "0"
viewmodel_recoil "0"
cl_bob_lower_amt "5.000000"
cl_bobamt_lat "0.100000"
cl_bobamt_vert "0.100000"
cl_bobcycle "0.98"


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// DŹWIĘK
volume 0.15
snd_menumusic_volume 0.00
snd_roundstart_volume 0.10
snd_roundend_volume 0.10
snd_mapobjective_volume 0.15
snd_tensecondwarning_volume 0.15
snd_deathcamera_volume 0.02
snd_mvp_volume 0.15

// VOICE_ENABLE
voice_enable 1

// ZAWSZE SŁYCHAĆ GRĘ
snd_mute_losefocus 0


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// FPS'Y
fps_max 0; fps_max_menu 0

cl_forcepreload 0

net_maxroutable 900


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// PRZYDATNE KOMENDY

// SAMOUCZEK
cl_autohelp 0

// CHOWANIE AVATARÓW
cl_hide_avatar_images 0

// CHOWANIE IP SERWERA
cl_hideserverip 1

// MUTE ENEMY
cl_mute_enemy_team 0

// AUTOMATYCZNA ZMIANA BRONI PO PODNIESIENIU
cl_autowepswitch 0

// WEAPON DONATE (LEWY ALT)
cl_buywheel_donate_key 1

// MYSZKA ZAWSZE NA ŚRODKU (BUYMENU)
cl_buywheel_nomousecentering 0

// KUPOWANIE RANDOMOWYCH BRONI NA DM
cl_dm_buyrandomweapons 0

// POWIADOMIENIA O ŚMIERCI
cl_draw_only_deathnotices 0

// WYŁĄCZNEIE KUPOWANIA CYFRAMI
cl_buywheel_nonumberpurchasing 1

// OTWIERANIE BUYMENU POD E
cl_use_opens_buy_menu 0

// ZAMKNIĘTE LOBBY
cl_invites_only_friends 1

// STATUS "SZUKAM GRY"
cl_invites_only_mainmenu 0


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ALIASY


// KOMENDA HELP
alias "BINDY" "key_listboundkeys"

// SZYBKIE QQ
alias "+qq" "slot3"
alias "-qq" "lastinv"
bind "Q" "+qq"

// RZUCANIE GRANATOW W SKOKU
alias "+jumpthrow" "+jump;-attack"
alias "-jumpthrow" "-jump"
bind "mouse3" "+jumpthrow"

// FPS POD TAB
net_graph "1"
net_graphpos "2"
net_graphproportionalfont "1"
net_graphheight "9999"
bind "TAB" "+scorenet"
alias "+scorenet" "+showscores; net_graphheight 0"
alias "-scorenet" "-showscores; net_graphheight 9999"net_graph "1"

// DECALSY
alias "+decalsy" "+lookatweapon;r_cleardecals"
alias "-decalsy" "-lookatweapon"
bind "F" "+decalsy"

// POKAZYWANIE OBRAZEN
developer 1
con_filter_enable 2
con_filter_text_out "Player:"
con_filter_text "damage given"


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// BINDY


// KONSOLA
con_enable 1
bind "\`" "toggleconsole"

// "BOMBOWY" BIND
bind "T" "playerradio deathcry Daddy!"
bind "Z" "+radialradio"

// KILL
bind "k" "kill"

// CZAT
bind "DEL" "mute"
bind "Y" "messagemode"
bind "U" "messagemode2"

// UZYCIE(DRZWI, ETC.)
bind "E" "+use"

//UZYCIE SPRAYU
bind "V" "+spray_menu"

// BUYMENU
bind "B" "buymenu"

// DROP
bind "G" "drop"

// MENU
bind "ESCAPE" "cancelselect"

// MENU2
bind "PAUSE" "pause"

// DISCONNECT
bind "=" "disconnect"

// ATAK
bind "MOUSE1" "+attack"
bind "MOUSE2" "+attack2"

// MOVEMENT
bind "W" "+forward"
bind "S" "+back"
bind "A" "+moveleft"
bind "D" "+moveright"
bind "CTRL" "+duck"

// WALK
bind "SHIFT" "+speed"

// RELOAD
bind "R" "+reload"

// TEAMMENU
bind "/" "teammenu"

// KONSOLA
bind "\`" "toggleconsole"

// ITEMY DANGERZONE
bind "M" "slot12"
bind "N" "slot13"

// VOICE
bindToggle "\" "voice_enable"

// ZMIANA ŁAPKI
bindToggle "H" "cl_righthand"

// SKAKANIE
bind "SPACE" "+jump"
bind "MWHEELUP" "+jump"
bind "MWHEELDOWN" "+jump"

// RĄCZKI RĘCE
bind "0" "slot10; cl_righthand 1"
bind "1" "slot1; cl_righthand 0"
bind "2" "slot2; cl_righthand 0"
bind "3" "slot3; cl_righthand 0"
bind "4" "slot4; cl_righthand 1"
bind "5" "slot5; cl_righthand 1"
bind "6" "slot6; cl_righthand 1"
bind "7" "slot7; cl_righthand 1"
bind "8" "slot8; cl_righthand 1"
bind "9" "slot9; cl_righthand 1"

// AUTOBUY - RE_BUY
bind "F3" "autobuy"
bind "F4" "rebuy"

// RADIO
bind "X" "radio"
bind "Z" "radio1"
bind "J" "radio2"
bind "K" "radio3"

// PINGOWANIE
bind "ALT" "player_ping"

// UZYCIE MIKRO
bind "C" "+voicerecord"


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// KONIEC
host_writeconfig

`;