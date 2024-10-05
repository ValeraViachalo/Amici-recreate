import Image from "next/image";

export const Logo = ({ ...rest }) => (
  <svg
    viewBox="0 0 123 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M11.074 0.25H12.4123C13.6652 0.25 14.433 0.509902 14.7222 1.02971C14.9021 1.35285 14.9584 1.73912 15.1429 2.05966C16.07 3.6712 16.617 5.18327 16.7507 6.5738C16.7948 6.92675 17.089 7.58854 17.6331 8.58859C18.9861 11.7505 20.0597 14.8094 20.8538 17.7801L22.7362 22.5598C23.4716 24.5746 23.8539 25.8246 23.8539 26.3393V26.3393C23.8539 26.4793 23.7925 26.6121 23.6858 26.7027L23.4194 26.9289C23.1967 27.1179 22.9142 27.2217 22.6221 27.2217H20.7656C19.7361 27.2217 18.9567 26.0011 18.4272 23.5745C17.7218 21.4167 16.8603 20.2606 15.8548 20.1308C15.7276 20.1144 15.599 20.1061 15.4731 20.0816L14.2626 19.8459C14.0887 19.8121 13.9111 19.8015 13.7344 19.8144L11.1629 20.0026C11.045 20.0112 10.9266 20.0094 10.8091 19.9971L10.2185 19.9354C10.0735 19.9202 9.92739 19.921 9.78262 19.9376L9.39999 19.9815C9.2033 20.0041 9.00435 19.9973 8.80965 19.9614L8.72413 19.9457C8.60461 19.9237 8.48296 19.9108 8.36162 19.9177C6.91133 20.0002 5.96428 21.0772 5.50923 23.1377C5.46071 23.3574 5.38258 23.5704 5.27718 23.7692C4.91263 24.4567 4.63107 25.1787 4.42616 25.9416C4.35347 26.2122 4.24398 26.4776 4.0405 26.6702C3.87313 26.8287 3.68029 26.9713 3.46559 27.0992C3.17044 27.275 2.82041 27.3228 2.4783 27.2913L1.88243 27.2364H1.11769C0.540438 27.2364 0.178847 26.8725 0.0200169 26.1317C0.00565797 26.0648 0 25.996 0 25.9276V25.9276C0 25.6407 0.190409 25.1105 0.562256 24.346C0.701521 24.0597 0.784801 23.7464 0.861078 23.4372C1.08164 22.5434 1.75038 20.6283 2.88247 17.6919L4.66196 12.927L6.22085 8.60329C7.39261 5.11435 8.31685 2.66262 8.98302 1.27977C9.1243 0.986499 9.34238 0.732984 9.6344 0.589138C10.0978 0.360881 10.5847 0.25 11.0887 0.25M6.63998 17.1257C6.57907 17.1866 6.57907 17.2854 6.63998 17.3463V17.3463C6.7009 17.4072 6.79967 17.4072 6.86058 17.3463L6.92519 17.2817C6.95445 17.2524 6.97088 17.2128 6.97088 17.1714V17.1714C6.97088 17.0852 6.90104 17.0154 6.8149 17.0154V17.0154C6.77353 17.0154 6.73385 17.0318 6.7046 17.0611L6.63998 17.1257ZM2.5001 23.7657C2.41076 23.855 2.41076 23.9999 2.5001 24.0892V24.0892C2.58945 24.1786 2.7343 24.1786 2.82365 24.0892L2.91841 23.9945C2.96132 23.9516 2.98542 23.8934 2.98542 23.8327V23.8327C2.98542 23.7064 2.88299 23.6039 2.75664 23.6039V23.6039C2.69596 23.6039 2.63777 23.628 2.59487 23.6709L2.5001 23.7657ZM7.68378 7.97864C7.66047 8.00194 7.64738 8.03355 7.64738 8.06651V8.06651C7.64738 8.09946 7.66047 8.13107 7.68378 8.15437L7.79518 8.26578C7.83539 8.30598 7.90057 8.30598 7.94077 8.26578V8.26578C7.96008 8.24648 7.97092 8.22029 7.97092 8.19299V7.86723C7.97092 7.82703 7.93833 7.79444 7.89813 7.79444V7.79444C7.87882 7.79444 7.86031 7.8021 7.84666 7.81576L7.68378 7.97864ZM8.51506 14.1182C8.51506 15.5889 9.48569 16.3242 11.4122 16.3242C13.6172 16.3242 14.8264 15.8628 15.0289 14.951C15.0707 14.7628 15.0312 14.5669 14.9759 14.3822C13.6168 9.84251 12.6319 7.46905 12.0084 7.24908C11.9745 7.2371 11.9383 7.23559 11.9023 7.23559V7.23559C11.793 7.23559 11.684 7.26038 11.5927 7.32046C10.971 7.7294 10.5142 8.57561 10.2118 9.84847C10.1878 9.94934 10.1579 10.0489 10.12 10.1454L9.68715 11.2479C9.51239 11.693 9.14382 12.1808 9.02994 12.6452C9.00245 12.7574 8.97586 12.8837 8.95012 13.0242C8.88504 13.3793 8.54929 13.7441 8.51506 14.1035V14.1035M9.2446 6.79439C9.15845 6.79439 9.08862 6.86573 9.08862 6.95188V6.95188C9.08862 6.99204 9.1039 7.0313 9.13137 7.0606L9.19358 7.12695C9.2562 7.19375 9.36223 7.19375 9.42485 7.12695V7.12695C9.48336 7.06454 9.48178 6.96696 9.42129 6.90647L9.3549 6.84008C9.32565 6.81083 9.28597 6.79439 9.2446 6.79439V6.79439ZM10.2504 5.51493C10.1907 5.45523 10.0887 5.49751 10.0887 5.58194V5.58194C10.0887 5.63427 10.1311 5.6767 10.1834 5.6767H10.2365C10.2767 5.6767 10.3093 5.64411 10.3093 5.60391V5.60391C10.3093 5.5846 10.3016 5.56608 10.2879 5.55243L10.2504 5.51493ZM11.6475 4.47077V4.47077C11.5816 4.53668 11.5446 4.62608 11.5446 4.7193V4.79431C11.5446 5.1775 11.6816 5.43743 11.9687 5.56087C11.9895 5.56983 12.0121 5.57375 12.0348 5.57375H12.1182C12.175 5.57375 12.2211 5.52766 12.2211 5.47081V5.47081C12.2211 4.79431 12.0299 4.45606 11.6475 4.45606M12.1182 3.04424L12.1066 3.05581C12.0481 3.11431 12.0152 3.19366 12.0152 3.2764V3.3596C12.0152 3.48595 12.1176 3.58838 12.244 3.58838H12.266C12.3126 3.58838 12.3573 3.56986 12.3902 3.5369L12.4241 3.503C12.4354 3.49175 12.4506 3.48543 12.4666 3.48543V3.48543C12.506 3.48543 12.5348 3.44793 12.5209 3.41104C12.4532 3.23143 12.3242 3.10917 12.1034 3.04424M14.3241 8.79448V8.79448C14.3241 8.92229 14.4154 9.03188 14.5411 9.05504L14.7902 9.10093C14.8514 9.1122 14.9142 9.11072 14.9748 9.09659L15.17 9.05104C15.2603 9.02998 15.3242 8.9495 15.3242 8.8568V8.8568C15.3242 8.76093 15.256 8.67863 15.1618 8.66081L14.8227 8.59666C14.7943 8.59129 14.7655 8.58859 14.7366 8.58859H14.5904C14.5612 8.58859 14.5331 8.60021 14.5124 8.62089L14.3345 8.79878C14.3307 8.80262 14.3241 8.7999 14.3241 8.79448V8.79448ZM14.8536 10.9563C14.8536 11.0457 14.926 11.1181 15.0153 11.1181H15.03C15.1194 11.1181 15.1918 11.0457 15.1918 10.9563V10.9563C15.1918 10.867 15.1194 10.7946 15.03 10.7946H15.0153C14.926 10.7946 14.8536 10.867 14.8536 10.9563V10.9563ZM15.4124 6.91205V7.10323C15.4124 7.19257 15.4848 7.265 15.5742 7.265H15.6528C15.6987 7.265 15.736 7.22775 15.736 7.18181V7.18181C15.736 7.15974 15.7272 7.13858 15.7116 7.12298L15.5367 6.94807C15.523 6.93442 15.5045 6.92675 15.4852 6.92675H15.4271C15.419 6.92675 15.4124 6.92017 15.4124 6.91205V6.91205ZM15.7654 9.13273V9.48568C15.7654 9.54254 15.8115 9.58863 15.8683 9.58863V9.58863C16.2484 9.58863 16.4667 9.49432 16.5363 9.29282C16.5426 9.27465 16.5448 9.25535 16.5448 9.23612V9.23612C16.5448 9.1792 16.5229 9.12448 16.4835 9.08334L16.4193 9.01627C16.2984 8.88983 16.1104 8.8353 15.9578 8.92093C15.8281 8.9937 15.7654 9.07056 15.7654 9.14743M15.9552 12.6917C15.956 12.6917 15.9566 12.6923 15.9566 12.693V12.8477C15.9566 12.8891 15.973 12.9287 16.0022 12.958L16.1189 13.0747C16.2221 13.1779 16.3621 13.2358 16.508 13.2358H16.6532C16.7062 13.2358 16.7571 13.2148 16.7946 13.1773L16.9348 13.037C16.988 12.9838 16.9603 12.8927 16.8865 12.8781L15.955 12.6943C15.9534 12.694 15.9537 12.6917 15.9552 12.6917V12.6917ZM19.6696 18.4055C19.6463 18.4288 19.6332 18.4605 19.6332 18.4934V18.4934C19.6332 18.5264 19.6463 18.558 19.6696 18.5813L19.781 18.6927C19.8212 18.7329 19.8864 18.7329 19.9266 18.6927V18.6927C19.9459 18.6734 19.9567 18.6472 19.9567 18.6199V18.2941C19.9567 18.2539 19.9241 18.2213 19.8839 18.2213V18.2213C19.8646 18.2213 19.8461 18.229 19.8325 18.2427L19.6696 18.4055ZM20.5009 23.5711C20.5009 23.5695 20.5033 23.5693 20.5037 23.5709C20.5761 23.8444 20.7653 23.9875 21.022 24.0001C21.0461 24.0013 21.0693 23.9914 21.0863 23.9744L21.1112 23.9495C21.1441 23.9166 21.1627 23.8719 21.1627 23.8253V23.7305C21.1627 23.6306 21.123 23.5348 21.0524 23.4642L21.02 23.4319C20.9701 23.382 20.9024 23.3539 20.8318 23.3539H20.7671C20.7379 23.3539 20.7098 23.3655 20.6892 23.3862L20.5032 23.5721C20.5024 23.573 20.5009 23.5724 20.5009 23.5711V23.5711ZM3.2869 20.1847C3.22599 20.2456 3.22599 20.3443 3.2869 20.4053V20.4053C3.34782 20.4662 3.44658 20.4662 3.5075 20.4053L3.57211 20.3406C3.60136 20.3114 3.6178 20.2717 3.6178 20.2303V20.2303C3.6178 20.1442 3.54796 20.0744 3.46181 20.0744V20.0744C3.42044 20.0744 3.38077 20.0908 3.35151 20.1201L3.2869 20.1847ZM11.5593 18.9125C11.5593 19.0019 11.6317 19.0743 11.7211 19.0743V19.0743C11.8104 19.0743 11.8829 19.0019 11.8829 18.9125V18.9125C11.8829 18.8232 11.8104 18.7508 11.7211 18.7508V18.7508C11.6317 18.7508 11.5593 18.8232 11.5593 18.9125V18.9125Z"
      fill="currentColor"
    ></path>
    <path
      d="M32.4573 0.397519L33.6177 0.563278C33.8712 0.5995 34.1294 0.586682 34.3781 0.525523L34.8382 0.412383C34.8783 0.40251 34.9195 0.397519 34.9609 0.397519V0.397519C34.988 0.397519 35.0152 0.399641 35.0419 0.404114C36.0347 0.570296 36.7128 0.979493 37.1046 1.60345C37.8874 3.04094 38.6151 4.54731 39.2477 6.09588C39.2898 6.19883 39.3404 6.29792 39.396 6.39427C39.6367 6.81185 39.8497 7.29216 40.0421 7.8352C40.217 8.32855 40.4268 8.57636 40.6274 9.05981V9.05981C40.8419 9.57682 41.3993 10.4552 41.6517 10.9548C41.7012 11.0528 41.7495 11.1625 41.7965 11.2841C41.9157 11.5924 42.096 11.8766 42.3539 12.0836L43.0316 12.6276C43.06 12.6503 43.0953 12.6627 43.1317 12.6627V12.6627C43.1622 12.6627 43.1921 12.654 43.2177 12.6373C44.0151 12.1137 44.5635 11.3298 44.8629 10.3174C44.9216 10.119 44.9986 9.92615 45.0996 9.7455C45.6159 8.82125 46.3726 7.17591 47.3697 4.80947C48.1387 3.07469 48.7581 1.88999 49.2319 1.25917C49.54 0.848979 50.1692 0.45746 50.6787 0.397519V0.397519H51.6423C51.8033 0.397519 51.9636 0.416945 52.1199 0.455376L52.3479 0.511426C52.6313 0.581126 52.9287 0.56913 53.2056 0.476826V0.476826C53.3632 0.424298 53.529 0.391669 53.6936 0.413879C54.0802 0.466029 54.411 0.643095 54.6896 0.948575C54.9263 1.20814 55.0024 1.56781 55.0024 1.9191V1.9417L54.911 3.29942C54.9033 3.41371 54.9055 3.52846 54.9174 3.64239L55.0904 5.29143C55.1101 5.47897 55.1027 5.66838 55.0686 5.85384V5.85384C55.0344 6.03902 55.0271 6.22815 55.0466 6.41543L55.1201 7.11839L55.0171 10.1038L55.0985 10.8828C55.1128 11.02 55.1129 11.1583 55.0988 11.2955L55.0414 11.8529C55.0253 12.0099 55.0278 12.1682 55.0488 12.3246L55.0952 12.6694C55.1118 12.7922 55.1168 12.9162 55.1104 13.0398L55.0171 14.8393L55.1113 16.6566C55.1171 16.7684 55.1135 16.8806 55.1006 16.9919L55.0413 17.4997C55.0252 17.6376 55.0235 17.7767 55.0363 17.9149L55.1039 18.6491C55.1147 18.766 55.1151 18.8836 55.1052 19.0006L55.0355 19.8274C55.0233 19.9723 55.0269 20.1181 55.0463 20.2623L55.0898 20.5855C55.1099 20.7348 55.1131 20.8858 55.0993 21.0358L55.0375 21.7066C55.024 21.8531 55.0342 22.0009 55.0676 22.1442V22.1442C55.1023 22.2931 55.112 22.4466 55.0961 22.5986L55.0171 23.3544V24.575L55.1201 26.1339C55.1201 26.7109 54.5544 27.0994 53.3974 27.3122C53.2915 27.3316 53.1836 27.3398 53.0759 27.3398H52.5671C52.4263 27.3398 52.285 27.327 52.1492 27.2895C51.2552 27.0424 50.7964 26.5132 50.7964 25.678V25.3214C50.7964 25.1966 50.808 25.0722 50.8312 24.9496L50.8352 24.9284C50.8776 24.7042 50.8814 24.4745 50.8463 24.2492L50.8303 24.1464C50.8078 24.0012 50.8012 23.8539 50.8109 23.7072L50.8993 22.369L50.7964 19.9425V19.0946C50.7964 18.9933 50.8041 18.8921 50.8194 18.792L50.9554 17.9033C50.9959 17.639 50.9729 17.3689 50.8883 17.1152V17.1152C50.8275 16.9327 50.7983 16.7411 50.8021 16.5487L50.8993 11.648C50.7228 10.1773 50.4728 9.44202 50.1199 9.44202V9.44202C49.9781 9.44202 49.8408 9.49483 49.7419 9.59638C48.9265 10.4338 48.1603 11.8086 47.4647 13.7207C47.4008 13.8963 47.3129 14.0626 47.2111 14.2193C47.0531 14.4626 46.9317 14.688 46.8469 14.8969C46.7161 15.2192 46.6375 15.4572 46.4502 15.7503V15.7503C46.0902 16.3135 45.5377 17.099 45.366 17.745C45.3499 17.8056 45.3342 17.8693 45.3187 17.936C45.2816 18.0958 45.231 18.2529 45.154 18.3977C44.5671 19.5019 43.9307 20.0601 43.2813 20.0601H42.5166C41.5734 20.0601 40.7553 19.0187 40.0216 16.9224C39.9784 16.7991 39.9247 16.6795 39.8604 16.5658C39.1417 15.2947 38.5729 14.0627 38.1542 12.9043C38.1208 12.8121 38.0816 12.7222 38.0358 12.6355L37.0248 10.7232C36.9315 10.5466 36.8122 10.3849 36.6709 10.2437L36.0879 9.66068C36.0232 9.596 35.9355 9.55967 35.8441 9.55967V9.55967C35.7929 9.55967 35.7419 9.57044 35.6971 9.59508C35.155 9.89271 34.8839 10.5427 34.8839 11.545V12.2546C34.8839 12.3794 34.8956 12.5038 34.9188 12.6264L34.9583 12.8354C34.9772 12.9354 34.9679 13.1556 34.9549 13.2566V13.2566C34.8769 13.8636 34.7188 14.7369 34.7826 15.3456L34.9544 16.9855C34.9759 17.1908 34.9655 17.3982 34.9236 17.6003L34.6745 18.8002C34.6671 18.8361 34.6633 18.8726 34.6633 18.9093V18.9093C34.6633 19.0171 34.6958 19.1224 34.7566 19.2115L34.8259 19.3133C34.8637 19.3687 34.8839 19.4342 34.8839 19.5013V19.5013L34.9708 21.4508C34.9814 21.6881 34.9454 21.9252 34.8648 22.1486V22.1486C34.7339 22.5116 34.7219 22.9069 34.8305 23.2772L34.9559 23.7045C34.9764 23.7745 34.9844 23.8475 34.9782 23.9201C34.9715 23.9989 34.9643 24.0718 34.9565 24.1386C34.9207 24.4438 34.8666 25.0084 34.9638 25.2999V25.2999C34.9791 25.3458 34.9871 25.3943 34.9863 25.4427C34.9658 26.7172 34.4074 27.3545 33.325 27.3545H32.6377C32.5177 27.3545 32.3973 27.3462 32.2814 27.3153C31.6578 27.1488 31.269 26.7331 31.1055 26.0731C30.978 25.5583 31.1701 24.9899 31.2469 24.465C31.2804 24.2365 31.31 23.9596 31.3354 23.6334C31.3491 23.4582 31.3369 23.2818 31.3025 23.1096L31.1893 22.544C31.1525 22.3596 31.1418 22.171 31.1576 21.9837L31.2198 21.2462C31.231 21.1127 31.2289 20.9784 31.2133 20.8453L31.0326 19.3038C31.0217 19.2104 31.0234 19.1159 31.0379 19.0229L31.1067 18.5804C31.1145 18.5307 31.098 18.4802 31.0624 18.4445V18.4445C31.0327 18.4149 31.0161 18.3747 31.0161 18.3329V18.2953L31.0965 17.6868C31.1115 17.5731 31.1167 17.4582 31.112 17.3436L31.0229 15.1529C31.0184 15.0424 31.0289 14.9318 31.054 14.8241V14.8241C31.0968 14.6406 31.0968 14.4497 31.054 14.2663L31.0213 14.1262C31.0178 14.1114 31.0161 14.0963 31.0161 14.0812V13.9325C31.0161 13.9054 31.0381 13.8834 31.0652 13.8834V13.8834C31.0941 13.8834 31.1168 13.8585 31.1141 13.8298L31.0161 12.7657V9.33907V9.33907C31.0415 8.89555 31.1913 8.18678 31.1396 7.74555L31.0335 6.84001C31.022 6.74239 31.0315 6.64346 31.0613 6.5498V6.5498C31.0991 6.43105 31.1041 6.30429 31.0758 6.18293L31.0531 6.08585C31.0286 5.98069 31.0204 5.87237 31.0287 5.7647L31.1079 4.74695C31.1153 4.65149 31.1159 4.55562 31.1096 4.46008L31.0268 3.20578C31.0197 3.09897 31.0285 2.99171 31.0528 2.88747L31.0683 2.82106C31.1015 2.67854 31.0966 2.52977 31.054 2.38976V2.38976C31.0289 2.30725 31.0158 2.22103 31.0209 2.13494C31.0753 1.22521 31.559 0.649709 32.4721 0.382812M32.95 7.85764C32.8646 7.76652 32.716 7.78102 32.6498 7.88694L32.5864 7.9885C32.5693 8.01575 32.5603 8.04723 32.5603 8.07936V8.07936C32.5603 8.17404 32.637 8.25079 32.7317 8.25079H32.7809C32.9027 8.25079 33.0015 8.15203 33.0015 8.03019V7.98779C33.0015 7.93945 32.9831 7.89291 32.95 7.85764V7.85764ZM33.4789 23.7956C33.3939 23.7956 33.325 23.8645 33.325 23.9495V24.0309C33.325 24.1527 33.4238 24.2515 33.5456 24.2515H33.6081C33.6955 24.2515 33.7662 24.1807 33.7662 24.0934V24.0934C33.7662 24.0532 33.7509 24.0146 33.7235 23.9853L33.5912 23.8442C33.5621 23.8132 33.5215 23.7956 33.4789 23.7956V23.7956ZM35.1409 2.3465C35.1176 2.3698 35.1045 2.40141 35.1045 2.43437V2.43437C35.1045 2.46733 35.1176 2.49893 35.1409 2.52224L35.1691 2.55045C35.2553 2.6366 35.395 2.6366 35.4811 2.55045V2.55045C35.5225 2.50908 35.5457 2.45297 35.5457 2.39447V2.31829C35.5457 2.23214 35.4759 2.1623 35.3897 2.1623V2.1623C35.3484 2.1623 35.3087 2.17873 35.2794 2.20799L35.1409 2.3465ZM42.1115 16.7877C42.0113 16.7572 41.9029 16.7954 41.8438 16.8819L41.7771 16.9798C41.7454 17.0263 41.7513 17.0888 41.7911 17.1286V17.1286C41.813 17.1506 41.8428 17.1629 41.8739 17.1629H42.0954C42.1981 17.1629 42.2813 17.0797 42.2813 16.9771V16.9771C42.2813 16.8953 42.2278 16.8231 42.1496 16.7993L42.1115 16.7877ZM43.5166 17.9571C43.5081 17.9571 43.5008 17.9631 43.4992 17.9715L43.4077 18.4554C43.4019 18.4859 43.399 18.5168 43.399 18.5479V18.5479C43.399 18.8226 43.625 19.0598 43.8942 19.0046C44.1205 18.9581 44.2551 18.8714 44.2915 18.7409C44.295 18.7283 44.2961 18.7152 44.2961 18.7022V18.7022C44.2961 18.6489 44.2746 18.5979 44.2365 18.5606L43.6932 18.0291C43.646 17.9829 43.5826 17.9571 43.5166 17.9571V17.9571V17.9571ZM44.6224 15.0194C44.6006 15.0606 44.6234 15.1078 44.6564 15.1408L44.6899 15.1743C44.7014 15.1858 44.7079 15.2014 44.7079 15.2176V15.2176C44.7079 15.2572 44.7449 15.2865 44.7827 15.2746C44.8759 15.2452 44.9603 15.2042 45.0358 15.1526C45.2227 15.0248 45.0673 14.7875 44.854 14.8636C44.7314 14.9074 44.6546 14.9586 44.6224 15.0194ZM46.8684 11.0533C46.7804 11.1375 46.7788 11.2777 46.8649 11.3638V11.3638C46.9057 11.4045 46.9609 11.4274 47.0185 11.4274H47.038C47.1644 11.4274 47.2668 11.3236 47.2668 11.1972V11.1972C47.2668 11.1378 47.2432 11.0802 47.2012 11.0382V11.0382C47.115 10.9521 46.9759 10.9505 46.8878 11.0347L46.8684 11.0533ZM51.7817 19.6116C51.7817 19.6725 51.8311 19.7219 51.892 19.7219V19.7219C51.9529 19.7219 52.0023 19.6725 52.0023 19.6116V19.4939C52.0023 19.433 51.9529 19.3836 51.892 19.3836V19.3836C51.8311 19.3836 51.7817 19.433 51.7817 19.4939V19.6116ZM51.9876 11.8833L52.0192 11.9826C52.0617 12.1162 52.1857 12.2068 52.3258 12.2068V12.2068C52.5317 12.2068 52.6352 12.0787 52.648 11.8104C52.6499 11.7711 52.6433 11.7318 52.6313 11.6943L52.6133 11.6376C52.5735 11.5124 52.4572 11.4274 52.3258 11.4274V11.4274C52.1346 11.4274 52.017 11.5745 51.9729 11.8833M53.3789 22.369C53.2928 22.369 53.2229 22.4389 53.2229 22.525V22.525C53.2229 22.5664 53.2394 22.6061 53.2686 22.6353L53.2875 22.6542C53.3737 22.7404 53.5134 22.7404 53.5995 22.6542L53.6184 22.6353C53.6477 22.6061 53.6641 22.5664 53.6641 22.525V22.525C53.6641 22.4389 53.5943 22.369 53.5081 22.369H53.3789Z"
      fill="currentColor"
    ></path>
    <path
      d="M72.6432 0.184478C72.6477 0.188951 72.6538 0.191464 72.6601 0.191464L73.7679 0.191464C74.3104 0.191464 74.754 0.487923 75.1151 1.08894C75.2827 1.368 75.3361 1.70074 75.291 2.02314C75.1494 3.03629 74.8031 3.60115 74.2384 3.72455C74.0752 3.76021 73.9061 3.76979 73.7459 3.81707C72.7054 4.1242 72.1307 4.586 72.0221 5.19378C71.9964 5.33743 71.9891 5.48467 71.9493 5.62509C71.8814 5.86524 71.7898 6.10315 71.6773 6.34161C71.4839 6.75161 71.4635 7.23075 71.6846 7.62649V7.62649C71.8151 7.85998 71.8676 8.12905 71.8344 8.39447L71.677 9.65324C71.6592 9.79622 71.6568 9.94072 71.67 10.0842L71.7825 11.3096V12.3791C71.7825 12.4097 71.7694 12.4389 71.7465 12.4593L71.7392 12.4657C71.6929 12.5069 71.6953 12.58 71.7442 12.6181V12.6181C71.7684 12.6369 71.7825 12.6658 71.7825 12.6964V12.7508L71.6129 13.9488C71.57 14.2518 71.6142 14.5607 71.7405 14.8394V14.8394C71.8454 15.0712 71.894 15.3246 71.8822 15.5788L71.7972 17.4128L71.8824 18.5074C71.8942 18.6595 71.8886 18.8125 71.8656 18.9634L71.8404 19.1294C71.8117 19.3174 71.8101 19.5086 71.8355 19.6971L71.8519 19.8189C71.8836 20.0547 71.8589 20.2946 71.7797 20.5189V20.5189C71.6323 20.9366 71.6823 21.3953 71.8907 21.7861C71.968 21.9309 72.0322 22.0594 72.0829 22.1713C72.2111 22.4541 72.2805 22.7761 72.4791 23.0148C72.746 23.3356 73.0949 23.5257 73.5223 23.5921C73.7604 23.6291 74.0036 23.6577 74.2217 23.7601C74.8649 24.0622 75.2059 24.4345 75.2363 24.877C75.2392 24.9188 75.2552 24.9592 75.2849 24.9889V24.9889C75.3205 25.0244 75.337 25.0748 75.3294 25.1246L75.2519 25.6339C75.243 25.6925 75.2385 25.7517 75.2385 25.811V25.8595C75.2385 26.2112 75.1531 26.5737 74.8918 26.8092C74.5429 27.1236 74.0996 27.2808 73.562 27.2808L72.5311 27.1349C72.1851 27.086 71.8323 27.1351 71.4873 27.1904C71.1108 27.2507 70.6099 27.2808 69.9883 27.2808H69.1429C69.04 27.2808 68.9372 27.2729 68.8355 27.2571L68.4998 27.2049C68.3857 27.1871 68.269 27.1947 68.1581 27.227V27.227C68.0368 27.2624 67.9088 27.2681 67.7849 27.2436L67.2658 27.1412C66.9954 27.0878 66.7169 27.0909 66.4477 27.1503L66.1678 27.212C65.9611 27.2576 65.7471 27.2758 65.5396 27.2341C64.774 27.08 64.3561 26.6627 64.3028 25.9908C64.2948 25.8906 64.3084 25.7902 64.3313 25.6922V25.6922C64.3764 25.4989 64.3771 25.2978 64.3334 25.1041L64.3242 25.0635C64.3061 24.9831 64.2969 24.9009 64.2969 24.8185V24.8185C64.2969 24.677 64.3178 24.532 64.4029 24.4189C64.6507 24.0895 65.1992 23.8039 66.0625 23.5551C66.2272 23.5076 66.4018 23.4987 66.5669 23.4528C67.3368 23.2386 67.7353 22.0065 67.7524 19.7562C67.7531 19.6555 67.7605 19.554 67.7757 19.4545L67.7907 19.356C67.8336 19.0737 67.8156 18.7853 67.7378 18.5105L67.6426 18.174C67.6377 18.1568 67.6353 18.1391 67.6353 18.1212V17.9755C67.6353 17.949 67.6568 17.9275 67.6833 17.9275V17.9275C67.7124 17.9275 67.7348 17.9019 67.7309 17.8731L67.6434 17.2231C67.638 17.183 67.6365 17.1424 67.639 17.102L67.7274 15.6619C67.7346 15.545 67.7315 15.4277 67.7182 15.3113L67.6554 14.7646C67.642 14.6478 67.6389 14.5302 67.6462 14.4129L67.7309 13.0464C67.7358 12.9672 67.7322 12.8877 67.7203 12.8093L67.6473 12.3299C67.6398 12.2802 67.6563 12.2298 67.6919 12.1942V12.1942C67.7216 12.1645 67.7382 12.1243 67.7382 12.0823V12.0639C67.7382 12.0513 67.737 12.0387 67.7347 12.0262L67.686 11.7688C67.6523 11.5909 67.643 11.4093 67.6582 11.2289L67.7382 10.2801L67.6353 7.38294L67.7102 6.65527C67.7288 6.47453 67.7239 6.29152 67.6885 6.11332C67.4235 4.77955 66.9815 4.05253 66.3531 3.94182C66.2387 3.92168 66.1212 3.9178 66.0077 3.89362C64.7832 3.63289 64.1646 2.98097 64.1646 1.91213C64.2381 0.809137 64.694 0.25029 65.4881 0.25029H66.1646L69.1688 0.456054C69.3127 0.465914 69.4573 0.460166 69.6001 0.438909L70.0089 0.378025C70.0539 0.371312 70.076 0.369023 70.1215 0.36649V0.36649C70.1744 0.363545 70.2502 0.351291 70.3031 0.347424L72.6246 0.177555C72.6315 0.177049 72.6383 0.179576 72.6432 0.184478V0.184478ZM68.5553 19.6188C68.4289 19.6188 68.3265 19.7212 68.3265 19.8475V19.8475C68.3265 19.9082 68.3506 19.9664 68.3935 20.0093L68.5107 20.1265C68.534 20.1498 68.5656 20.1629 68.5986 20.1629V20.1629C68.6315 20.1629 68.6631 20.1498 68.6864 20.1265L68.8342 19.9787C68.8575 19.9554 68.8706 19.9238 68.8706 19.8908V19.8908C68.8706 19.8579 68.8575 19.8263 68.8342 19.803L68.717 19.6858C68.6741 19.6429 68.6159 19.6188 68.5553 19.6188V19.6188ZM68.5441 9.55445C68.4713 9.6465 68.499 9.77615 68.582 9.85914V9.85914C68.635 9.91211 68.707 9.94311 68.7818 9.93831C69.0751 9.91947 69.2534 9.82515 69.3166 9.63771C69.3241 9.61539 69.3265 9.59171 69.3265 9.56816V9.38303C69.3265 9.32617 69.2804 9.28008 69.2236 9.28008V9.28008C68.9105 9.28008 68.6888 9.37154 68.5441 9.55445ZM69.0486 17.3471C68.9517 17.3162 68.8461 17.3527 68.7888 17.4367L68.7077 17.5556C68.6797 17.5967 68.6647 17.6452 68.6647 17.6949V17.7862C68.6647 17.8724 68.7346 17.9422 68.8207 17.9422V17.9422C68.8621 17.9422 68.9018 17.9258 68.931 17.8965L69.1525 17.6751C69.1886 17.639 69.2089 17.59 69.2089 17.5389V17.5389C69.2089 17.455 69.1546 17.3808 69.0747 17.3554L69.0486 17.3471ZM69.7781 5.94171C69.7724 5.94171 69.7677 5.94636 69.7677 5.95211V6.052C69.7677 6.11292 69.8171 6.1623 69.878 6.1623H69.9368C70.0303 6.1623 70.106 6.08658 70.106 5.99318V5.7939C70.106 5.7537 70.0734 5.72111 70.0332 5.72111V5.72111C70.0139 5.72111 69.9954 5.72878 69.9817 5.74243L69.7855 5.93866C69.7835 5.94061 69.7809 5.94171 69.7781 5.94171V5.94171ZM70.106 13.5008V13.5008C70.106 13.5762 70.1359 13.6484 70.1892 13.7017L70.2378 13.7503C70.2946 13.8072 70.3717 13.8391 70.4521 13.8391H70.4966C70.605 13.8391 70.7004 13.7675 70.7308 13.6634V13.6634C70.7613 13.5586 70.7185 13.4462 70.6259 13.3883L70.4652 13.2879C70.4419 13.2733 70.4149 13.2655 70.3874 13.2655V13.2655C70.3485 13.2655 70.3111 13.281 70.2836 13.3086L70.1164 13.4757C70.1097 13.4824 70.106 13.4914 70.106 13.5008V13.5008ZM70.3707 16.501C70.2813 16.501 70.2089 16.5734 70.2089 16.6627V16.6627C70.2089 16.7521 70.2813 16.8245 70.3707 16.8245H70.695C70.7352 16.8245 70.7678 16.7919 70.7678 16.7517V16.7517C70.7678 16.7324 70.7601 16.7139 70.7464 16.7003L70.6172 16.571C70.5724 16.5262 70.5115 16.501 70.4481 16.501H70.3707ZM70.5619 7.94179V8.02615C70.5619 8.15825 70.669 8.26533 70.8011 8.26533H70.8074C70.8668 8.26533 70.9237 8.24174 70.9657 8.19975V8.19975C71.0519 8.11361 71.0533 7.97441 70.969 7.88646L70.9448 7.86116C70.8566 7.76912 70.7092 7.76993 70.622 7.86293L70.5719 7.91636C70.5655 7.92325 70.5619 7.93234 70.5619 7.94179V7.94179ZM85.4449 4.3534L85.6514 4.41366C85.7462 4.44131 85.8476 4.43617 85.9391 4.39907L86.0118 4.36958C86.1946 4.29547 86.2836 4.0879 86.2112 3.90442V3.90442C86.157 3.76712 86.0244 3.67691 85.8768 3.67691H85.8692C85.822 3.67691 85.7744 3.6844 85.7336 3.70801C85.5545 3.81162 85.4596 4.0232 85.4596 4.3534M71.0415 24.3886C71.4388 24.0841 71.0405 23.6 70.6949 23.9621V23.9621C70.4572 24.2112 70.7336 24.6098 71.0136 24.4093C71.0229 24.4026 71.0322 24.3957 71.0415 24.3886Z"
      fill="currentColor"
    ></path>
    <path
      d="M95.298 0C96.2465 0.0470322 96.961 0.0982424 97.4437 0.158085C97.9327 0.218703 98.4526 0.353092 98.9446 0.379931L98.9893 0.382369C99.607 0.382369 100.19 0.455902 100.739 0.602967C101.354 0.783799 101.86 0.994278 102.25 1.202C102.411 1.28819 102.547 1.41738 102.709 1.50357C102.77 1.53614 102.838 1.56425 102.912 1.58779C103.338 1.72224 103.807 1.80753 104.079 2.16085C104.204 2.32269 104.305 2.49507 104.381 2.678C104.469 2.88557 104.48 3.11468 104.461 3.33896L104.405 3.99002C104.393 4.13363 104.396 4.27813 104.415 4.42103L104.543 5.39497C104.585 5.71528 104.583 6.07172 104.355 6.3002C104.192 6.46299 103.978 6.54439 103.71 6.54439H103.387C103.185 6.54439 101.988 5.955 99.7804 4.76251C99.6752 4.70566 99.5646 4.65778 99.4507 4.62105C97.6984 4.05561 96.3876 3.77957 95.5186 3.77957H94.7538C91.959 3.77957 89.6111 5.35794 87.6967 8.50107C87.5966 8.66528 87.5241 8.84522 87.4782 9.03192C86.8098 11.7499 86.4656 13.4171 86.4456 14.0212C86.4445 14.0552 86.4311 14.0876 86.4071 14.1117V14.1117C86.368 14.1507 86.3585 14.21 86.3803 14.2607C86.5908 14.7514 86.8635 15.9265 87.1983 17.7972C87.2155 17.8933 87.2393 17.9886 87.2715 18.0807C87.5678 18.9276 87.9361 19.6015 88.3712 20.1074C88.6732 20.4585 88.9161 20.8712 89.18 21.2518C89.4422 21.6301 89.8626 22.0023 90.4448 22.3686C92.2074 23.4522 93.7004 24.0106 94.9236 24.0299C94.9657 24.0306 95.0058 24.0471 95.0356 24.0769V24.0769C95.0711 24.1124 95.122 24.1289 95.1717 24.1214C97.171 23.8206 98.5803 23.5115 99.3868 23.2004C99.7772 23.0498 100.197 22.9205 100.573 22.7361C100.982 22.5353 101.497 22.1627 102.123 21.6155C102.318 21.4448 102.541 21.308 102.785 21.2189L103.072 21.1137C103.431 20.9824 103.843 20.9182 104.164 21.1262C104.468 21.3233 104.622 21.6231 104.622 22.0303V22.0303C104.622 22.0989 104.617 22.1673 104.606 22.235L104.544 22.6331C104.528 22.7397 104.535 22.8487 104.567 22.9519V22.9519C104.603 23.0708 104.607 23.1971 104.58 23.3183L104.567 23.3775C104.535 23.5168 104.536 23.6615 104.568 23.8006L104.57 23.81C104.604 23.9551 104.606 24.1062 104.57 24.2508C104.414 24.8807 104.238 25.3179 104.037 25.5624C103.831 25.8123 103.472 25.8752 103.183 26.0203C102.15 26.5389 101.23 26.9144 100.426 27.1489C99.4686 27.4278 98.1282 27.707 97.1334 27.7703V27.7703C96.9616 27.7812 96.5808 27.7744 96.4137 27.7333L95.9498 27.6192C95.8294 27.5896 95.7059 27.5747 95.582 27.5747H95.3026C95.175 27.5747 95.0504 27.6131 94.945 27.685V27.685C94.8396 27.7568 94.715 27.7953 94.5874 27.7953H93.6655C93.532 27.7953 93.3889 27.7574 93.2417 27.6815C93.0091 27.5616 92.7492 27.4782 92.4945 27.5386V27.5386C92.3938 27.5624 92.2893 27.5669 92.1872 27.5498C90.0516 27.1931 88.0002 26.2889 86.0329 24.8099C85.9449 24.7271 85.8624 24.643 85.7853 24.5574C85.1859 23.8921 84.4648 22.9819 84.0468 22.19C83.6346 21.4094 83.1738 20.1993 82.6624 18.5637C82.6251 18.4443 82.5992 18.3206 82.5852 18.1963L82.2827 15.5154V14.1391C82.2827 14.0176 82.2938 13.8963 82.3158 13.7768L82.3241 13.7317C82.3649 13.5106 82.368 13.2841 82.3334 13.062L82.3065 12.8886C82.2907 12.7869 82.2827 12.6841 82.2827 12.5812V12.0593C82.4298 10.0887 82.768 8.50036 83.2828 7.29442C84.1946 4.94138 85.5328 3.20602 87.2535 2.10303C88.6947 1.29417 90.136 1.01475 91.8566 0.500021L92.2985 0.378512C92.396 0.351709 92.4953 0.332334 92.5957 0.320553L95.3274 0L95.298 0ZM84.9087 11.0593C84.7823 11.0593 84.6799 11.1617 84.6799 11.2881V11.4474C84.6799 11.5336 84.7497 11.6034 84.8359 11.6034V11.6034C84.8772 11.6034 84.9169 11.587 84.9462 11.5577L85.068 11.4359C85.1542 11.3497 85.1542 11.21 85.068 11.1239V11.1239C85.0267 11.0825 84.9705 11.0593 84.912 11.0593H84.9087ZM85.1336 17.3956C85.129 17.391 85.1211 17.3943 85.1211 17.4008V17.5573C85.1211 17.5829 85.1003 17.6037 85.0747 17.6037V17.6037C85.0454 17.6037 85.0234 17.6305 85.0317 17.6586C85.0679 17.7805 85.1394 17.8772 85.2463 17.9486C85.3626 18.0263 85.5127 17.9666 85.5915 17.851L85.6034 17.8335C85.6517 17.7627 85.6647 17.6736 85.6388 17.592V17.592C85.602 17.4763 85.4945 17.3978 85.3732 17.3978H85.1388C85.1369 17.3978 85.135 17.397 85.1336 17.3956V17.3956ZM86.1008 19.8153C86.1029 19.8132 86.1064 19.8147 86.1064 19.8176V20.0171C86.1064 20.0258 86.1077 20.0345 86.1105 20.0428C86.1879 20.2697 86.4074 20.3832 86.7829 20.3832H87.0113C87.0638 20.3832 87.1064 20.3406 87.1064 20.288V20.288C87.1064 20.2732 87.1031 20.2586 87.0962 20.2455C86.9667 19.9992 86.7581 19.8316 86.4704 19.7303C86.4537 19.7244 86.4355 19.7241 86.4185 19.729L86.104 19.8208C86.1008 19.8217 86.0984 19.8177 86.1008 19.8153V19.8153ZM89.0785 22.7951C89.029 22.7951 88.9889 22.8352 88.9889 22.8847V22.8847C88.9889 22.8935 88.9902 22.9023 88.9928 22.9108L89.0353 23.0506C89.0689 23.1609 89.1706 23.2363 89.2859 23.2363H89.3271C89.449 23.2363 89.5477 23.1375 89.5477 23.0157V23.0157C89.5477 22.8938 89.449 22.7951 89.3271 22.7951H89.0785ZM90.6507 3.30896V3.47073C90.6507 3.62505 90.7758 3.75016 90.9301 3.75016H91.0536C91.1397 3.75016 91.2096 3.68032 91.2096 3.59417V3.5722C91.2096 3.5449 91.2204 3.51871 91.2397 3.49941V3.49941C91.2799 3.4592 91.2799 3.39402 91.2397 3.35382L91.1726 3.28669C91.1226 3.23676 91.0499 3.21722 90.9817 3.23541L90.6649 3.31988C90.6577 3.32179 90.6507 3.31639 90.6507 3.30896V3.30896ZM90.8693 25.2364C90.8704 25.2364 90.8713 25.2373 90.8713 25.2384V25.5442C90.8713 25.6293 90.9065 25.7106 90.9686 25.7688L91.028 25.8245C91.0785 25.8718 91.1451 25.8981 91.2144 25.8981V25.8981C91.2866 25.8981 91.3559 25.8694 91.407 25.8183L91.4698 25.7555C91.5198 25.7056 91.5478 25.6379 91.5478 25.5672V25.5672C91.5478 25.4966 91.5198 25.4289 91.4698 25.379L91.2335 25.1427C91.2188 25.128 91.1971 25.1229 91.1774 25.1294L90.8686 25.2323C90.8664 25.2331 90.8669 25.2364 90.8693 25.2364V25.2364ZM91.6632 1.10299C91.6563 1.10299 91.6508 1.10854 91.6508 1.11539V1.25897C91.6508 1.30034 91.6672 1.34002 91.6964 1.36927L91.7611 1.43388C91.8317 1.50451 91.9275 1.54418 92.0273 1.54418H92.0891C92.1684 1.54418 92.2467 1.52624 92.3181 1.4917L92.4716 1.41739C92.5902 1.36003 92.6655 1.23992 92.6655 1.10821V0.864012C92.6655 0.809184 92.6211 0.764738 92.5662 0.764738V0.764738C92.5541 0.764738 92.542 0.766967 92.5307 0.771315L91.6676 1.10217C91.6662 1.10271 91.6647 1.10299 91.6632 1.10299V1.10299ZM95.4373 1.94898C95.414 1.97228 95.4009 2.00389 95.4009 2.03685V2.03685C95.4009 2.06981 95.414 2.10142 95.4373 2.12472L95.5383 2.22572C95.5916 2.27899 95.6638 2.30892 95.7392 2.30892V2.30892C95.8145 2.30892 95.8867 2.279 95.94 2.22573L96.041 2.12472C96.0643 2.10141 96.0774 2.06981 96.0774 2.03685V2.03685C96.0774 2.00389 96.0643 1.97229 96.041 1.94898L95.94 1.84797C95.8867 1.7947 95.8145 1.76478 95.7392 1.76478V1.76478C95.6638 1.76478 95.5916 1.79471 95.5383 1.84798L95.4373 1.94898ZM98.8528 1.42653C98.847 1.42653 98.8422 1.43125 98.8422 1.43707V1.53683C98.8422 1.59775 98.8916 1.64713 98.9525 1.64713H99.0918C99.158 1.64713 99.2215 1.62083 99.2683 1.57403L99.3701 1.47222C99.3994 1.44296 99.4158 1.40329 99.4158 1.36192V1.36192C99.4158 1.27577 99.3459 1.20593 99.2598 1.20593H99.1839C99.125 1.20593 99.0683 1.22835 99.0254 1.26864L98.86 1.42368C98.858 1.42551 98.8555 1.42653 98.8528 1.42653V1.42653Z"
      fill="currentColor"
    ></path>
    <path
      d="M119.939 0.184496C119.944 0.188957 119.95 0.191464 119.956 0.191464H120.49L121.064 0.191464C121.606 0.191464 122.05 0.487923 122.411 1.08894C122.579 1.368 122.632 1.70074 122.587 2.02314C122.445 3.03629 122.099 3.60115 121.534 3.72455C121.371 3.76021 121.202 3.76979 121.042 3.81707C120.001 4.1242 119.427 4.586 119.318 5.19378C119.292 5.33743 119.285 5.48467 119.245 5.62509C119.177 5.86524 119.086 6.10315 118.973 6.34162C118.78 6.75161 118.759 7.23075 118.981 7.62648V7.62648C119.111 7.85998 119.164 8.12906 119.13 8.39447L118.972 9.6634C118.955 9.79966 118.952 9.93732 118.963 10.0742L119.064 11.3096V12.3808C119.064 12.4106 119.052 12.4391 119.031 12.4601L119.024 12.4673C118.982 12.5093 118.984 12.5781 119.029 12.6172V12.6172C119.051 12.6367 119.064 12.6649 119.064 12.6945V12.7508L118.894 13.9488C118.851 14.2518 118.896 14.5607 119.022 14.8394V14.8394C119.127 15.0712 119.175 15.3246 119.163 15.5788L119.078 17.4128L119.164 18.5074C119.175 18.6595 119.17 18.8125 119.147 18.9634L119.122 19.1294C119.093 19.3174 119.091 19.5086 119.117 19.6971L119.133 19.8189C119.165 20.0547 119.14 20.2946 119.061 20.5189V20.5189C118.914 20.9366 118.964 21.3953 119.172 21.7861C119.249 21.9309 119.313 22.0594 119.364 22.1713C119.492 22.4541 119.562 22.7761 119.76 23.0148C120.027 23.3356 120.376 23.5257 120.804 23.5921C121.042 23.6291 121.285 23.6576 121.503 23.7602C122.147 24.0628 122.488 24.4372 122.518 24.8916C122.52 24.9335 122.536 24.9739 122.566 25.0036V25.0036C122.602 25.0391 122.618 25.0895 122.611 25.1393L122.533 25.6486C122.524 25.7072 122.52 25.7664 122.52 25.8257V25.8719C122.52 26.2248 122.432 26.5884 122.166 26.821C121.818 27.1257 121.377 27.2808 120.843 27.2808L119.812 27.1349C119.466 27.086 119.114 27.1351 118.769 27.1904C118.392 27.2507 117.891 27.2808 117.27 27.2808H116.424C116.321 27.2808 116.218 27.2729 116.117 27.2571L115.781 27.2049C115.667 27.1871 115.55 27.1947 115.439 27.227V27.227C115.318 27.2624 115.19 27.2681 115.066 27.2436L114.547 27.1412C114.277 27.0878 113.998 27.0909 113.729 27.1503L113.449 27.212C113.242 27.2576 113.028 27.2758 112.821 27.2341C112.055 27.08 111.637 26.6627 111.584 25.9908C111.576 25.8906 111.59 25.7902 111.613 25.6922V25.6922C111.658 25.4989 111.658 25.2978 111.615 25.1041L111.605 25.0635C111.587 24.9831 111.578 24.9009 111.578 24.8185V24.8185C111.578 24.677 111.599 24.532 111.684 24.4189C111.932 24.0895 112.48 23.8039 113.344 23.5551C113.508 23.5076 113.683 23.4987 113.848 23.4528C114.618 23.2386 115.017 22.0065 115.034 19.7562C115.034 19.6555 115.042 19.554 115.057 19.4545L115.072 19.356C115.115 19.0737 115.097 18.7853 115.019 18.5105L114.924 18.174C114.919 18.1568 114.917 18.1391 114.917 18.1212V17.9755C114.917 17.949 114.938 17.9275 114.965 17.9275V17.9275C114.994 17.9275 115.016 17.9019 115.012 17.8731L114.925 17.2231C114.919 17.183 114.918 17.1424 114.92 17.102L115.009 15.6619C115.016 15.545 115.013 15.4277 114.999 15.3113L114.937 14.7646C114.923 14.6478 114.92 14.5302 114.927 14.4129L115.012 13.0464C115.017 12.9672 115.013 12.8877 115.002 12.8093L114.929 12.3299C114.921 12.2802 114.938 12.2298 114.973 12.1942V12.1942C115.003 12.1645 115.019 12.1243 115.019 12.0823V12.0639C115.019 12.0513 115.018 12.0387 115.016 12.0262L114.967 11.7688C114.934 11.5909 114.924 11.4093 114.939 11.2289L115.019 10.2801L114.917 7.38294L114.991 6.65679C115.01 6.47506 115.005 6.29106 114.969 6.11194C114.704 4.79187 114.262 4.06705 113.634 3.95652C113.52 3.93639 113.402 3.9325 113.289 3.90832C112.064 3.6476 111.446 2.99568 111.446 1.92683C111.534 0.823844 111.975 0.264997 112.769 0.264997H113.446L116.495 0.473849C116.609 0.481665 116.724 0.479677 116.838 0.467907L117.093 0.441475L117.446 0.367942L119.921 0.177597C119.927 0.177064 119.934 0.179585 119.939 0.184496V0.184496ZM115.851 19.6188C115.725 19.6188 115.622 19.7212 115.622 19.8475V19.8475C115.622 19.9082 115.647 19.9664 115.689 20.0093L115.807 20.1265C115.83 20.1498 115.862 20.1629 115.895 20.1629V20.1629C115.927 20.1629 115.959 20.1498 115.982 20.1265L116.13 19.9787C116.153 19.9554 116.167 19.9238 116.167 19.8908V19.8908C116.167 19.8579 116.153 19.8263 116.13 19.803L116.013 19.6858C115.97 19.6429 115.912 19.6188 115.851 19.6188V19.6188ZM115.84 9.53974C115.767 9.63179 115.795 9.76145 115.878 9.84443V9.84443C115.931 9.89741 116.003 9.92841 116.078 9.92361C116.371 9.90476 116.549 9.81045 116.613 9.623C116.62 9.60068 116.622 9.57701 116.622 9.55345V9.36832C116.622 9.31147 116.576 9.26538 116.52 9.26538V9.26538C116.206 9.26538 115.985 9.35683 115.84 9.53974ZM116.181 17.3072C116.181 17.3036 116.177 17.3023 116.175 17.3052L115.979 17.6059C115.967 17.6238 115.961 17.6448 115.961 17.6662V17.8009C115.961 17.8871 116.031 17.9569 116.117 17.9569V17.9569C116.158 17.9569 116.198 17.9405 116.227 17.9112L116.448 17.6898C116.485 17.6537 116.505 17.6047 116.505 17.5536V17.5536C116.505 17.4697 116.451 17.3955 116.371 17.3701L116.184 17.3106C116.182 17.3102 116.181 17.3088 116.181 17.3072V17.3072ZM117.074 5.94171C117.068 5.94171 117.064 5.94636 117.064 5.95211V6.052C117.064 6.11292 117.113 6.1623 117.174 6.1623H117.233C117.326 6.1623 117.402 6.08658 117.402 5.99318V5.7939C117.402 5.7537 117.369 5.72111 117.329 5.72111V5.72111C117.31 5.72111 117.291 5.72878 117.278 5.74243L117.081 5.93866C117.079 5.94061 117.077 5.94171 117.074 5.94171V5.94171ZM117.402 13.4861V13.4861C117.402 13.5615 117.432 13.6337 117.485 13.687L117.534 13.7356C117.591 13.7925 117.668 13.8244 117.748 13.8244H117.793C117.901 13.8244 117.996 13.7528 118.027 13.6487V13.6487C118.057 13.5439 118.014 13.4314 117.922 13.3735L117.761 13.2732C117.738 13.2586 117.711 13.2508 117.683 13.2508V13.2508C117.644 13.2508 117.607 13.2663 117.58 13.2938L117.412 13.461C117.406 13.4677 117.402 13.4767 117.402 13.4861V13.4861ZM117.505 16.501V16.5598C117.505 16.7141 117.63 16.8392 117.784 16.8392H117.991C118.031 16.8392 118.064 16.8066 118.064 16.7664V16.7664C118.064 16.7471 118.056 16.7286 118.042 16.715L117.913 16.5857C117.868 16.5409 117.807 16.5157 117.744 16.5157H117.52C117.511 16.5157 117.505 16.5091 117.505 16.501V16.501ZM117.858 7.94179V8.03655C117.858 8.1629 117.961 8.26533 118.087 8.26533V8.26533C118.147 8.26533 118.205 8.24137 118.248 8.19872V8.19872C118.334 8.11262 118.337 7.97397 118.255 7.88421L118.238 7.86576C118.152 7.77188 118.004 7.77105 117.917 7.86396L117.868 7.91636C117.861 7.92325 117.858 7.93234 117.858 7.94179V7.94179Z"
      fill="currentColor"
    ></path>
  </svg>
);
