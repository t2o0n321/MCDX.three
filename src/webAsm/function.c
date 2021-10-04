#include <stdio.h>
#include <emscripten.h>

char* not_flag = "MCDX{Th15_15_N0t_tHe_fl4g}";

// int encrypt_(int input){
//     int out, magic_key = 9887;
//     out = magic_key ^ input;
//     return out;
// }

EMSCRIPTEN_KEEPALIVE
int P455Chkr(int chr, int index){
    int x[36] = {
        9938 ,9948 ,9947 ,9927 ,
        9956 ,9928 ,9982 ,9898 ,
        9938 ,9920 ,9970 ,9899 ,
        9940 ,9900 ,9898 ,9920 ,
        9958 ,9903 ,9930 ,9933 ,
        9920 ,9928 ,9900 ,9981 ,
        9920 ,9933 ,9962 ,9937 ,
        9920 ,9977 ,9899 ,9898 ,
        9963 ,9900 ,9933 ,9954
    }; // MCDX{Wa5M_m4K35_y0UR_W3b_RuN_f45t3R}
    char* str = not_flag;
    if(index > 35) return 0;
    int out, magic_key = 9887;
    out = magic_key ^ chr;
    if(out == x[index]) return 1;
    return 0;
}



