(function () {
  "use strict";
  var e = {
      9079: function (e, t, n) {
        var a = n(9963),
          s = n(6252),
          i = n(3577);
        const o = (e) => (
            (0, s.dD)("data-v-2a37dde5"), (e = e()), (0, s.Cn)(), e
          ),
          r = { class: "app__inner" },
          l = o(() =>
            (0, s._)(
              "a",
              { id: "download", style: { display: "none" } },
              null,
              -1
            )
          ),
          c = {
            id: "font-preloads",
            style: {
              position: "fixed",
              top: "1000vh",
              bottom: "1000vh",
              visibility: "hidden",
            },
          };
        function u(e, t, n, o, u, d) {
          const p = (0, s.up)("notifications"),
            g = (0, s.up)("sidebar"),
            f = (0, s.up)("tab-view");
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "div",
              {
                id: "app",
                class: (0, i.C_)([
                  "app",
                  { "app--dark-mode": e.$store.state.preferences.darkMode },
                ]),
                ref: "app",
              },
              [
                (0, s.wy)(
                  (0, s._)(
                    "div",
                    r,
                    [
                      (0, s.Wm)(p),
                      (0, s._)(
                        "div",
                        {
                          class: (0, i.C_)([
                            "dropzone",
                            { "dropzone--active": u.dropzoneActive },
                          ]),
                          ref: "dropzone",
                        },
                        null,
                        2
                      ),
                      (0, s.Wm)(g),
                      (0, s.Wm)(f, { tabs: e.$store.getters.tabs }, null, 8, [
                        "tabs",
                      ]),
                      e.$store.state.panel
                        ? ((0, s.wg)(),
                          (0, s.j4)((0, s.LL)(e.$store.state.panel), {
                            key: 0,
                          }))
                        : (0, s.kq)("", !0),
                      l,
                      (0, s._)("div", c, [
                        ((0, s.wg)(!0),
                        (0, s.iD)(
                          s.HY,
                          null,
                          (0, s.Ko)(
                            e.$store.state.fonts,
                            (e) => (
                              (0, s.wg)(),
                              (0, s.iD)(
                                "span",
                                {
                                  key: e.id,
                                  style: (0, i.j5)({
                                    fontFamily: ` '${e.id}'`,
                                  }),
                                },
                                null,
                                4
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ],
                    512
                  ),
                  [[a.F8, e.$store.state.window.loaded]]
                ),
              ],
              2
            )
          );
        }
        const d = (e) => (
            (0, s.dD)("data-v-037b35cd"), (e = e()), (0, s.Cn)(), e
          ),
          p = ["onClick"],
          g = { class: "flex rw ai-c" },
          f = d(() =>
            (0, s._)(
              "line",
              { x1: "18", y1: "18", x2: "35", y2: "35" },
              null,
              -1
            )
          ),
          h = d(() =>
            (0, s._)(
              "line",
              { x1: "50", y1: "5", x2: "50", y2: "30" },
              null,
              -1
            )
          ),
          m = d(() =>
            (0, s._)(
              "line",
              { x1: "82", y1: "18", x2: "65", y2: "35" },
              null,
              -1
            )
          ),
          b = d(() =>
            (0, s._)(
              "line",
              { x1: "70", y1: "50", x2: "95", y2: "50" },
              null,
              -1
            )
          ),
          v = d(() =>
            (0, s._)(
              "line",
              { x1: "82", y1: "82", x2: "65", y2: "65" },
              null,
              -1
            )
          ),
          w = d(() =>
            (0, s._)(
              "line",
              { x1: "50", y1: "70", x2: "50", y2: "95" },
              null,
              -1
            )
          ),
          y = d(() =>
            (0, s._)(
              "line",
              { x1: "18", y1: "82", x2: "35", y2: "65" },
              null,
              -1
            )
          ),
          x = d(() =>
            (0, s._)(
              "line",
              { x1: "5", y1: "50", x2: "30", y2: "50" },
              null,
              -1
            )
          ),
          _ = [f, h, m, b, v, w, y, x],
          S = {
            key: 1,
            class: "notification__icon",
            style: { flex: "0 0 auto" },
          },
          T = ["innerHTML"],
          k = (0, s.Uk)("  "),
          F = ["innerHTML"];
        function C(e, t, n, o, r, l) {
          return r.show
            ? ((0, s.wg)(),
              (0, s.iD)(
                "div",
                {
                  key: 0,
                  class: (0, i.C_)([
                    "notifications-wrapper",
                    {
                      "notifications-wrapper--bar-open": e.$store.getters.font,
                    },
                  ]),
                },
                [
                  (0, s.Wm)(
                    a.W3,
                    {
                      name: "notification-list",
                      tag: "div",
                      class: "notifications",
                      appear: "",
                    },
                    {
                      default: (0, s.w5)(() => [
                        ((0, s.wg)(!0),
                        (0, s.iD)(
                          s.HY,
                          null,
                          (0, s.Ko)(
                            l.notifications,
                            (t) => (
                              (0, s.wg)(),
                              (0, s.iD)(
                                "div",
                                {
                                  key: t.id,
                                  class: (0, i.C_)([
                                    "notification",
                                    {
                                      "notification--status-warning":
                                        "warning" == t.status,
                                      "notification--status-danger":
                                        "danger" == t.status,
                                      "notification--status-function":
                                        "function" == t.status ||
                                        "success" == t.status,
                                      "notification--status-blue":
                                        "blue" == t.color,
                                    },
                                  ]),
                                  onClick: (n) =>
                                    e.$store.commit("removeNotification", t),
                                },
                                [
                                  (0, s._)("div", g, [
                                    "spinner" === t.type || t.icon
                                      ? ((0, s.wg)(),
                                        (0, s.iD)(
                                          s.HY,
                                          { key: 0 },
                                          [
                                            "spinner" === t.type ||
                                            "spinner" === t.icon
                                              ? ((0, s.wg)(),
                                                (0, s.iD)(
                                                  "svg",
                                                  {
                                                    key: 0,
                                                    viewBox: "0 0 100 100",
                                                    style: (0, i.j5)({
                                                      width:
                                                        "spinner" === t.type
                                                          ? "50px"
                                                          : "34px",
                                                      height:
                                                        "spinner" === t.type
                                                          ? "50px"
                                                          : "34px",
                                                    }),
                                                    class: (0, i.C_)([
                                                      {
                                                        notification__icon:
                                                          "spinner" === t.icon,
                                                      },
                                                      "spinner",
                                                    ]),
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                  },
                                                  _,
                                                  6
                                                ))
                                              : t.icon
                                              ? ((0, s.wg)(),
                                                (0, s.iD)("div", S, [
                                                  (0, s._)(
                                                    "span",
                                                    {
                                                      class: "icon",
                                                      innerHTML: t.icon,
                                                    },
                                                    null,
                                                    8,
                                                    T
                                                  ),
                                                  k,
                                                ]))
                                              : (0, s.kq)("", !0),
                                          ],
                                          64
                                        ))
                                      : (0, s.kq)("", !0),
                                    (0, s._)(
                                      "div",
                                      { innerHTML: t.text },
                                      null,
                                      8,
                                      F
                                    ),
                                  ]),
                                ],
                                10,
                                p
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                ],
                2
              ))
            : (0, s.kq)("", !0);
        }
        var D = {
            name: "notifications",
            data() {
              return { show: !1 };
            },
            computed: {
              notifications() {
                return this.$store.state.notifications;
              },
            },
            mounted() {
              setTimeout(() => (this.show = !0), 750);
            },
          },
          A = n(3744);
        const M = (0, A.Z)(D, [
          ["render", C],
          ["__scopeId", "data-v-037b35cd"],
        ]);
        var $ = M;
        function I(e, t, n, a, i, o) {
          const r = (0, s.up)("panel");
          return null != o.panel
            ? ((0, s.wg)(),
              (0, s.j4)(
                r,
                { panel: o.panel, fullHeight: !0, key: o.panel.name },
                {
                  default: (0, s.w5)(() => [
                    ((0, s.wg)(), (0, s.j4)((0, s.LL)(o.panel))),
                  ]),
                  _: 1,
                },
                8,
                ["panel"]
              ))
            : (0, s.kq)("", !0);
        }
        const V = { key: 0, class: "panel__wrapper" },
          P = { key: 0, class: "panel__header" };
        function O(e, t, n, o, r, l) {
          const c = (0, s.up)("panel-tabs");
          return n.view || n.tabs
            ? ((0, s.wg)(),
              (0, s.iD)("div", V, [
                (0, s.Wm)(
                  a.uT,
                  { appear: "", name: "background" },
                  {
                    default: (0, s.w5)(() => [
                      (0, s._)("div", {
                        class: "panel__background",
                        onClick:
                          t[0] ||
                          (t[0] = (...e) =>
                            l.handleClose && l.handleClose(...e)),
                      }),
                    ]),
                    _: 1,
                  }
                ),
                (0, s.Wm)(
                  a.uT,
                  { appear: "", name: "panel" },
                  {
                    default: (0, s.w5)(() => [
                      (0, s._)(
                        "div",
                        { class: "panel", style: (0, i.j5)(l.getStyle()) },
                        [
                          null != l.menuTabs
                            ? ((0, s.wg)(),
                              (0, s.iD)("div", P, [
                                (0, s.Wm)(
                                  c,
                                  {
                                    tabs: l.menuTabs,
                                    currentTab: r.tab,
                                    onSetTab: l.setTab,
                                  },
                                  null,
                                  8,
                                  ["tabs", "currentTab", "onSetTab"]
                                ),
                              ]))
                            : (0, s.kq)("", !0),
                          (0, s._)(
                            "div",
                            {
                              class: "panel__body custom-scrollbar",
                              style: (0, i.j5)(l.getBodyStyle()),
                            },
                            [
                              null != n.view
                                ? ((0, s.wg)(),
                                  (0, s.j4)((0, s.LL)(n.view), { key: 0 }))
                                : ((0, s.wg)(),
                                  (0, s.j4)(
                                    s.Ob,
                                    { key: 1 },
                                    [
                                      ((0, s.wg)(),
                                      (0, s.j4)((0, s.LL)(r.tab))),
                                    ],
                                    1024
                                  )),
                            ],
                            4
                          ),
                        ],
                        4
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]))
            : (0, s.kq)("", !0);
        }
        const L = { class: "panel-tabs flex rw ai-c" },
          B = ["onClick"];
        function H(e, t, n, a, o, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)("div", L, [
              ((0, s.wg)(!0),
              (0, s.iD)(
                s.HY,
                null,
                (0, s.Ko)(
                  n.tabs,
                  (t, a) => (
                    (0, s.wg)(),
                    (0, s.iD)(
                      "div",
                      {
                        key: a,
                        onClick: (n) => e.$emit("set-tab", t),
                        class: (0, i.C_)([
                          "panel-tabs__tab flex rw ai-c jc-c",
                          {
                            "panel-tabs__tab--current":
                              n.currentTab.name === t.name,
                          },
                        ]),
                      },
                      [(0, s._)("h5", null, (0, i.zw)(t.title), 1)],
                      10,
                      B
                    )
                  )
                ),
                128
              )),
            ])
          );
        }
        var j = { name: "panel-tabs", props: ["tabs", "currentTab", "setTab"] };
        const N = (0, A.Z)(j, [
          ["render", H],
          ["__scopeId", "data-v-57b0d3a0"],
        ]);
        var z = N,
          E = {
            name: "panel",
            props: ["view", "tabs", "startTab", "showTitleBar"],
            components: { PanelTabs: z },
            data() {
              return { tab: this.getStartTab() };
            },
            computed: {
              bodyStyle: function () {
                let e = {};
                return (
                  null == this.tab.padding ||
                    this.tab.padding ||
                    (e.padding = "0"),
                  e
                );
              },
              menuTabs: function () {
                return null != this.view && this.showTitleBar
                  ? [this.view]
                  : null != this.tabs
                  ? this.tabs
                  : null;
              },
            },
            methods: {
              handleClose() {
                this.$store.commit("togglePanel");
              },
              getStyle() {
                let e = { width: "760px", height: "760px" };
                return this.tab.width && (e.width = `${this.tab.width}px`), e;
              },
              getBodyStyle() {
                let e = {};
                return (
                  null != this.tab.padding &&
                    0 == this.tab.padding &&
                    (e.padding = "0"),
                  e
                );
              },
              setTab(e) {
                this.tab = e;
              },
              getStartTab() {
                return null != this.view
                  ? this.view
                  : null != this.startTab
                  ? this.startTab
                  : null != this.tabs
                  ? this.tabs[0]
                  : null;
              },
            },
          };
        const U = (0, A.Z)(E, [
          ["render", O],
          ["__scopeId", "data-v-da7434e6"],
        ]);
        var R = U,
          W = {
            name: "panel-view",
            components: { Panel: R },
            computed: {
              panel: function () {
                return this.$store.state.panel;
              },
            },
          };
        const q = (0, A.Z)(W, [["render", I]]);
        var Y = q;
        const G = (e) => (
            (0, s.dD)("data-v-cf309866"), (e = e()), (0, s.Cn)(), e
          ),
          K = { key: 0, class: "sidebar__inner custom-scrollbar-thin" },
          Z = { class: "button" },
          X = { class: "icon" },
          J = G(() =>
            (0, s._)(
              "div",
              { class: "sidebar__show__text" },
              [(0, s._)("span", null, "  Stop Presenting ")],
              -1
            )
          );
        function Q(e, t, n, o, r, l) {
          const c = (0, s.up)("sidebar-section"),
            u = (0, s.up)("sidebar-bar");
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "div",
              { class: "sidebar", style: (0, i.j5)(l.sidebarCSS) },
              [
                e.$store.state.window.loaded
                  ? (0, s.wy)(
                      ((0, s.wg)(),
                      (0, s.iD)(
                        "div",
                        K,
                        [
                          ((0, s.wg)(!0),
                          (0, s.iD)(
                            s.HY,
                            null,
                            (0, s.Ko)(
                              r.sidebarSections,
                              (e, t) => (
                                (0, s.wg)(),
                                (0, s.iD)(
                                  s.HY,
                                  { key: t },
                                  [
                                    l.showSection(e)
                                      ? ((0, s.wg)(),
                                        (0, s.j4)(
                                          c,
                                          { key: 0, section: e },
                                          null,
                                          8,
                                          ["section"]
                                        ))
                                      : (0, s.kq)("", !0),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        512
                      )),
                      [[a.F8, l.open]]
                    )
                  : (0, s.kq)("", !0),
                l.open
                  ? ((0, s.wg)(), (0, s.j4)(u, { key: 1 }))
                  : (0, s.kq)("", !0),
                (0, s._)(
                  "div",
                  {
                    class: (0, i.C_)([
                      "sidebar__show",
                      {
                        "sidebar__show--active":
                          e.$store.state.settings.presentationMode,
                      },
                    ]),
                    onClick:
                      t[0] ||
                      (t[0] = (...e) =>
                        l.handleSidebarToggle && l.handleSidebarToggle(...e)),
                  },
                  [
                    (0, s._)("button", Z, [
                      (0, s._)("span", X, (0, i.zw)(l.open ? "" : ""), 1),
                      J,
                    ]),
                  ],
                  2
                ),
              ],
              4
            )
          );
        }
        var ee = n(2262);
        const te = { class: "grid grid--row-2" },
          ne = ["disabled", "onClick"],
          ae = { key: 0, class: "dota" },
          se = (0, s._)("span", null, "•", -1),
          ie = (0, s._)("span", null, "•", -1),
          oe = (0, s._)("span", null, "•", -1),
          re = [se, ie, oe],
          le = { key: 1 };
        function ce(e, t, n, a, o, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)("div", null, [
              (0, s._)("div", te, [
                ((0, s.wg)(!0),
                (0, s.iD)(
                  s.HY,
                  null,
                  (0, s.Ko)(
                    o.buttons,
                    (t, n) => (
                      (0, s.wg)(),
                      (0, s.iD)(
                        "button",
                        {
                          key: n,
                          class: (0, i.C_)([
                            "text-overflow-ellipsis",
                            { offline: !e.$store.getters[t.test] },
                          ]),
                          disabled: !e.$store.getters[t.test],
                          onClick: (e) => r.getSampleText(t),
                        },
                        [
                          t.loading && t.indicateLoading
                            ? ((0, s.wg)(), (0, s.iD)("span", ae, re))
                            : ((0, s.wg)(),
                              (0, s.iD)("span", le, (0, i.zw)(t.name), 1)),
                        ],
                        10,
                        ne
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        var ue = {
          name: "sample-text",
          data() {
            return {
              buttons: [
                {
                  name: "Title",
                  apiPath: "/title",
                  test: "server",
                  loading: !1,
                },
                {
                  name: "Pangram",
                  apiPath: "/pangram",
                  test: "server",
                  loading: !1,
                },
                {
                  name: "Paragraph",
                  apiPath: "/paragraph",
                  test: "server",
                  loading: !1,
                },
                {
                  name: "Wikipedia",
                  apiPath: "/wikipedia",
                  loading: !1,
                  test: "online",
                  indicateLoading: !0,
                },
              ],
            };
          },
          methods: {
            async getSampleText(e) {
              e.loading ||
                ((e.loading = !0),
                await this.$store.dispatch(
                  "setTextFromApiPath",
                  "/text" + e.apiPath
                ),
                (e.loading = !1));
            },
          },
        };
        const de = (0, A.Z)(ue, [["render", ce]]);
        var pe = de;
        const ge = { class: "grid grid--row-2" },
          fe = ["disabled", "onClick"];
        function he(e, t, n, a, o, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)("div", null, [
              (0, s._)("div", ge, [
                (0, s._)(
                  "button",
                  {
                    class: "text-overflow-ellipsis",
                    onClick:
                      t[0] ||
                      (t[0] = (t) =>
                        e.$store.dispatch("changeTextToSet", "all")),
                  },
                  " Entire Font "
                ),
                ((0, s.wg)(!0),
                (0, s.iD)(
                  s.HY,
                  null,
                  (0, s.Ko)(
                    o.textSets,
                    (t) => (
                      (0, s.wg)(),
                      (0, s.iD)(
                        "button",
                        {
                          class: (0, i.C_)([
                            "text-overflow-ellipsis",
                            { offline: !e.$store.getters.server },
                          ]),
                          key: t.name,
                          disabled: !e.$store.getters.server,
                          onClick: (n) =>
                            e.$store.dispatch(
                              "setTextFromApiPath",
                              `/text-set/${t.apiPath}`
                            ),
                        },
                        (0, i.zw)(t.name),
                        11,
                        fe
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        var me = {
          name: "character-sets",
          data() {
            return {
              textSets: [
                { apiPath: "overview", name: "Overview" },
                { apiPath: "macos-roman", name: "MacOS Roman" },
                { apiPath: "windows-1252", name: "Windows 1252" },
                { apiPath: "basic-latin", name: "Basic Latin" },
                { apiPath: "latin-1-supplement", name: "Latin Supplement" },
                { apiPath: "latin-extended-a", name: "Latin Extended-A" },
              ],
            };
          },
        };
        const be = (0, A.Z)(me, [["render", he]]);
        var ve = be;
        const we = (e) => (
            (0, s.dD)("data-v-541ec87d"), (e = e()), (0, s.Cn)(), e
          ),
          ye = { class: "text-properties" },
          xe = { class: "sidebar__sub-section" },
          _e = { class: "text-properties__row__icon" },
          Se = { class: "text-properties__row__input" },
          Te = { class: "text-properties__row__icon" },
          ke = { class: "text-properties__row__input" },
          Fe = { class: "text-properties__row__icon" },
          Ce = { class: "text-properties__row__input" },
          De = { class: "sidebar__sub-section" },
          Ae = { class: "button-group" },
          Me = { class: "button-pod" },
          $e = ["onClick"],
          Ie = { key: 0, class: "icon" },
          Ve = ["innerHTML"],
          Pe = { key: 0, class: "icon s" },
          Oe = { key: 1, class: "icon s", style: { color: "#999999" } },
          Le = { class: "button-pod" },
          Be = ["onClick"],
          He = ["innerHTML"],
          je = we(() => (0, s._)("span", { class: "icon xl" }, "", -1)),
          Ne = [je],
          ze = we(() => (0, s._)("span", { class: "icon l" }, "", -1)),
          Ee = [ze];
        function Ue(e, t, n, a, o, r) {
          const l = (0, s.up)("input-range");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", ye, [
              (0, s._)("div", xe, [
                (0, s._)(
                  "div",
                  {
                    class: (0, i.C_)([
                      "text-properties__row flex rw ai-c",
                      {
                        disabled: ["waterfall"].includes(
                          e.$store.getters.viewMode
                        ),
                      },
                    ]),
                  },
                  [
                    (0, s._)("div", _e, [
                      (0, s._)(
                        "span",
                        {
                          class: "icon circle-hover link",
                          onClick:
                            t[0] ||
                            (t[0] = (t) =>
                              e.$store.dispatch("updateTabFgValue", {
                                name: "fontSize",
                                value: e.$store.state.defaults.fontSize.default,
                                format: "float",
                              })),
                        },
                        ""
                      ),
                    ]),
                    (0, s._)("div", Se, [
                      (0, s.Wm)(
                        l,
                        {
                          min:
                            "glyphs" === e.$store.getters.viewMode
                              ? 28
                              : e.$store.state.defaults.fontSize.min,
                          max:
                            "glyphs" === e.$store.getters.viewMode
                              ? 200
                              : e.$store.state.defaults.fontSize.max,
                          value: parseFloat(r.fg.fontSize),
                          crop: !1,
                          step: null,
                          decimals: 0,
                          onValueChange: r.updateFontSize,
                        },
                        null,
                        8,
                        ["min", "max", "value", "onValueChange"]
                      ),
                    ]),
                  ],
                  2
                ),
                (0, s._)(
                  "div",
                  {
                    class: (0, i.C_)([
                      "text-properties__row flex rw ai-c",
                      {
                        disabled: ["glyphs"].includes(
                          e.$store.getters.viewMode
                        ),
                      },
                    ]),
                  },
                  [
                    (0, s._)("div", Te, [
                      (0, s._)(
                        "span",
                        {
                          class: "icon circle-hover link",
                          onClick:
                            t[1] ||
                            (t[1] = (t) =>
                              e.$store.dispatch("updateTabFgValue", {
                                name: "letterSpacing",
                                value:
                                  e.$store.state.defaults.letterSpacing.default,
                                format: "float",
                              })),
                        },
                        "  "
                      ),
                    ]),
                    (0, s._)("div", ke, [
                      (0, s.Wm)(
                        l,
                        {
                          min: e.$store.state.defaults.letterSpacing.min,
                          max: e.$store.state.defaults.letterSpacing.max,
                          value: 1e3 * r.fg.letterSpacing,
                          crop: !1,
                          step: null,
                          decimals: 0,
                          onValueChange:
                            t[2] ||
                            (t[2] = (t) =>
                              e.$store.dispatch("updateTabFgValue", {
                                name: "letterSpacing",
                                value: t / 1e3,
                              })),
                        },
                        null,
                        8,
                        ["min", "max", "value"]
                      ),
                    ]),
                  ],
                  2
                ),
                (0, s._)(
                  "div",
                  {
                    class: (0, i.C_)([
                      "text-properties__row flex rw ai-c",
                      {
                        disabled: [
                          "waterfall",
                          "style-range",
                          "glyphs",
                        ].includes(e.$store.getters.viewMode),
                      },
                    ]),
                  },
                  [
                    (0, s._)("div", Fe, [
                      (0, s._)(
                        "span",
                        {
                          class: "icon circle-hover link",
                          onClick:
                            t[3] ||
                            (t[3] = (t) =>
                              e.$store.dispatch("updateTabFgValue", {
                                name: "lineHeight",
                                value:
                                  e.$store.state.defaults.lineHeight.default,
                                format: "float",
                              })),
                        },
                        ""
                      ),
                    ]),
                    (0, s._)("div", Ce, [
                      (0, s.Wm)(
                        l,
                        {
                          min: e.$store.state.defaults.lineHeight.min,
                          max: e.$store.state.defaults.lineHeight.max,
                          value: r.fg.lineHeight,
                          crop: !1,
                          step: null,
                          decimals: 2,
                          onValueChange:
                            t[4] ||
                            (t[4] = (t) =>
                              e.$store.dispatch("updateTabFgValue", {
                                name: "lineHeight",
                                value: t,
                              })),
                        },
                        null,
                        8,
                        ["min", "max", "value"]
                      ),
                    ]),
                  ],
                  2
                ),
              ]),
              (0, s._)("div", De, [
                (0, s._)("div", Ae, [
                  (0, s._)("div", Me, [
                    ((0, s.wg)(!0),
                    (0, s.iD)(
                      s.HY,
                      null,
                      (0, s.Ko)(
                        o.optionsTextAlignment,
                        (t, n) => (
                          (0, s.wg)(),
                          (0, s.iD)(
                            "button",
                            {
                              key: n,
                              class: (0, i.C_)([
                                "button--square",
                                { active: r.fg.textAlign == t.value },
                              ]),
                              onClick: (n) =>
                                e.$store.dispatch("updateTabFgValue", {
                                  name: "textAlign",
                                  value: t.value,
                                }),
                            },
                            [
                              "left" === t.value && "rtl" === r.fg.direction
                                ? ((0, s.wg)(), (0, s.iD)("span", Ie, ""))
                                : ((0, s.wg)(),
                                  (0, s.iD)(
                                    "span",
                                    {
                                      key: 1,
                                      class: "icon",
                                      innerHTML: t.text,
                                    },
                                    null,
                                    8,
                                    Ve
                                  )),
                            ],
                            10,
                            $e
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  (0, s._)(
                    "button",
                    {
                      class: "toggle",
                      style: { flex: "1 1 auto" },
                      onClick:
                        t[5] ||
                        (t[5] = (t) =>
                          e.$store.dispatch("toggleTabForegroundValue", {
                            name: "direction",
                            values: ["ltr", "rtl"],
                          })),
                    },
                    [
                      e.$store.state.preferences.defaultTextDirection !==
                      r.fg.direction
                        ? ((0, s.wg)(), (0, s.iD)("span", Pe, ""))
                        : ((0, s.wg)(), (0, s.iD)("span", Oe, "")),
                      (0, s.Uk)(
                        " " +
                          (0, i.zw)(
                            "ltr" ===
                              e.$store.state.preferences.defaultTextDirection
                              ? "RTL"
                              : "LTR"
                          ),
                        1
                      ),
                    ]
                  ),
                  (0, s._)("div", Le, [
                    ((0, s.wg)(!0),
                    (0, s.iD)(
                      s.HY,
                      null,
                      (0, s.Ko)(
                        o.optionsOtherProperties,
                        (t, n) => (
                          (0, s.wg)(),
                          (0, s.iD)(
                            "button",
                            {
                              key: n,
                              class: (0, i.C_)([
                                "button--square",
                                { active: r.fg[t.type] == t.value },
                              ]),
                              onClick: (n) =>
                                e.$store.dispatch("toggleTabForegroundValue", {
                                  name: "textTransform",
                                  value: t.value,
                                }),
                            },
                            [
                              (0, s._)(
                                "span",
                                { class: "icon", innerHTML: t.text },
                                null,
                                8,
                                He
                              ),
                            ],
                            10,
                            Be
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  (0, s._)(
                    "button",
                    {
                      class: (0, i.C_)([
                        "toggle button--square",
                        { active: r.fg.centerMode },
                      ]),
                      onClick:
                        t[6] ||
                        (t[6] = (t) =>
                          e.$store.dispatch(
                            "toggleTabForegroundBoolean",
                            "centerMode"
                          )),
                    },
                    Ne,
                    2
                  ),
                  (0, s._)(
                    "button",
                    {
                      class: (0, i.C_)([
                        "toggle button--square",
                        { active: r.tab.data.autoSizeText },
                      ]),
                      onClick:
                        t[7] ||
                        (t[7] = (t) => e.$store.dispatch("toggleAutoSizeText")),
                    },
                    Ee,
                    2
                  ),
                ]),
              ]),
            ])
          );
        }
        const Re = (e) => (
            (0, s.dD)("data-v-16af1ded"), (e = e()), (0, s.Cn)(), e
          ),
          We = { class: "input-range__inner" },
          qe = {
            class:
              "input-range__track-wrapper input-range__track-wrapper--thumb",
            ref: "track-thumb",
          },
          Ye = ["value"],
          Ge = {
            class:
              "input-range__track-wrapper input-range__track-wrapper--crop-left",
            ref: "track-crop-left",
          },
          Ke = { class: "input-range__marker__inner" },
          Ze = Re(() =>
            (0, s._)("polygon", { points: "0,0 10,5 0,10" }, null, -1)
          ),
          Xe = [Ze],
          Je = { key: 0, class: "input-range__marker__number" },
          Qe = {
            class:
              "input-range__track-wrapper input-range__track-wrapper--crop-right",
            ref: "track-crop-right",
          },
          et = { class: "input-range__marker__inner" },
          tt = Re(() =>
            (0, s._)("polygon", { points: "0,5 10,0 10,10" }, null, -1)
          ),
          nt = [tt],
          at = { key: 0, class: "input-range__marker__number" },
          st = Re(() =>
            (0, s._)(
              "div",
              { class: "input-range__track-wrapper" },
              [(0, s._)("div", { class: "input-range__track" })],
              -1
            )
          );
        function it(e, t, n, a, o, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "div",
              {
                class: (0, i.C_)([
                  "input-range",
                  { "input-range--crop": n.crop },
                ]),
              },
              [
                (0, s._)("div", We, [
                  (0, s._)(
                    "div",
                    qe,
                    [
                      (0, s._)(
                        "div",
                        {
                          class: (0, i.C_)([
                            "input-range__marker input-range__marker--thumb border-color--base",
                            {
                              "input-range__marker--thumb--active":
                                o.thumbInputActive,
                            },
                          ]),
                          ref: "thumb",
                          style: (0, i.j5)({
                            left:
                              100 * r.valueToPercentage(o.thumbPosition) + "%",
                          }),
                          onMousedown:
                            t[1] ||
                            (t[1] = (...e) =>
                              r.handleThumbMousedown &&
                              r.handleThumbMousedown(...e)),
                          onMouseup:
                            t[2] ||
                            (t[2] = (...e) =>
                              r.handleThumbMouseup &&
                              r.handleThumbMouseup(...e)),
                          onTouchstart:
                            t[3] ||
                            (t[3] = (...e) =>
                              r.handleThumbMousedown &&
                              r.handleThumbMousedown(...e)),
                          onTouchend:
                            t[4] ||
                            (t[4] = (...e) =>
                              r.handleThumbMouseup &&
                              r.handleThumbMouseup(...e)),
                        },
                        [
                          (0, s._)(
                            "input",
                            {
                              type: "number",
                              ref: "thumb-input",
                              value: r.formatValueDisplay(o.thumbPosition),
                              onChange:
                                t[0] ||
                                (t[0] = (...e) =>
                                  r.handleThumbInputChange &&
                                  r.handleThumbInputChange(...e)),
                            },
                            null,
                            40,
                            Ye
                          ),
                        ],
                        38
                      ),
                    ],
                    512
                  ),
                  n.crop
                    ? ((0, s.wg)(),
                      (0, s.iD)(
                        s.HY,
                        { key: 0 },
                        [
                          (0, s._)(
                            "div",
                            Ge,
                            [
                              (0, s._)(
                                "div",
                                {
                                  class:
                                    "input-range__marker input-range__marker--crop",
                                  style: (0, i.j5)({
                                    left:
                                      100 * r.valueToPercentage(o.cropMin) +
                                      "%",
                                  }),
                                },
                                [
                                  (0, s._)("div", Ke, [
                                    ((0, s.wg)(),
                                    (0, s.iD)(
                                      "svg",
                                      {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 10 10",
                                        preserveAspectRatio: "none",
                                        onMousedown:
                                          t[5] ||
                                          (t[5] = (...e) =>
                                            r.handleCropLeftMousedown &&
                                            r.handleCropLeftMousedown(...e)),
                                        onMouseup:
                                          t[6] ||
                                          (t[6] = (...e) =>
                                            r.handleCropLeftMouseup &&
                                            r.handleCropLeftMouseup(...e)),
                                        onTouchstart:
                                          t[7] ||
                                          (t[7] = (...e) =>
                                            r.handleCropLeftMousedown &&
                                            r.handleCropLeftMousedown(...e)),
                                        onTouchend:
                                          t[8] ||
                                          (t[8] = (...e) =>
                                            r.handleCropLeftMouseup &&
                                            r.handleCropLeftMouseup(...e)),
                                      },
                                      Xe,
                                      32
                                    )),
                                    o.cropLeftDown
                                      ? ((0, s.wg)(),
                                        (0, s.iD)(
                                          "div",
                                          Je,
                                          (0, i.zw)(
                                            r.formatValueDisplay(o.cropMin)
                                          ),
                                          1
                                        ))
                                      : (0, s.kq)("", !0),
                                  ]),
                                ],
                                4
                              ),
                            ],
                            512
                          ),
                          (0, s._)(
                            "div",
                            Qe,
                            [
                              (0, s._)(
                                "div",
                                {
                                  class:
                                    "input-range__marker input-range__marker--crop",
                                  style: (0, i.j5)({
                                    left:
                                      100 * r.valueToPercentage(o.cropMax) +
                                      "%",
                                  }),
                                  ref: "crop-left",
                                },
                                [
                                  (0, s._)("div", et, [
                                    ((0, s.wg)(),
                                    (0, s.iD)(
                                      "svg",
                                      {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 10 10",
                                        preserveAspectRatio: "none",
                                        onMousedown:
                                          t[9] ||
                                          (t[9] = (...e) =>
                                            r.handleCropRightMousedown &&
                                            r.handleCropRightMousedown(...e)),
                                        onMouseup:
                                          t[10] ||
                                          (t[10] = (...e) =>
                                            r.handleCropRightMouseup &&
                                            r.handleCropRightMouseup(...e)),
                                        onTouchstart:
                                          t[11] ||
                                          (t[11] = (...e) =>
                                            r.handleCropRightMousedown &&
                                            r.handleCropRightMousedown(...e)),
                                        onTouchend:
                                          t[12] ||
                                          (t[12] = (...e) =>
                                            r.handleCropRightMouseup &&
                                            r.handleCropRightMouseup(...e)),
                                      },
                                      nt,
                                      32
                                    )),
                                    o.cropRightDown
                                      ? ((0, s.wg)(),
                                        (0, s.iD)(
                                          "div",
                                          at,
                                          (0, i.zw)(
                                            r.formatValueDisplay(o.cropMax)
                                          ),
                                          1
                                        ))
                                      : (0, s.kq)("", !0),
                                  ]),
                                ],
                                4
                              ),
                            ],
                            512
                          ),
                          st,
                        ],
                        64
                      ))
                    : (0, s.kq)("", !0),
                  (0, s._)(
                    "div",
                    {
                      class:
                        "input-range__track-wrapper input-range__track-wrapper--crop-left",
                      onMousedown:
                        t[13] ||
                        (t[13] = (...e) =>
                          r.handleTrackMousedown &&
                          r.handleTrackMousedown(...e)),
                    },
                    [
                      n.crop
                        ? ((0, s.wg)(),
                          (0, s.iD)(
                            "div",
                            {
                              key: 0,
                              class:
                                "input-range__track input-range__track--crop-left",
                              style: (0, i.j5)({
                                left:
                                  100 * r.valueToPercentage(o.cropMin) + "%",
                                right: `calc(${
                                  100 *
                                  (1 - r.valueToPercentage(o.thumbPosition))
                                }% - ${o.cropWidth}px)`,
                              }),
                            },
                            null,
                            4
                          ))
                        : ((0, s.wg)(),
                          (0, s.iD)(
                            "div",
                            {
                              key: 1,
                              class:
                                "input-range__track input-range__track--crop-left",
                              style: (0, i.j5)({
                                left:
                                  100 * r.valueToPercentage(o.cropMin) + "%",
                                right: `calc(${
                                  100 *
                                  (1 - r.valueToPercentage(o.thumbPosition))
                                }% - ${o.cropWidth}px)`,
                              }),
                            },
                            null,
                            4
                          )),
                    ],
                    32
                  ),
                  (0, s._)(
                    "div",
                    {
                      class:
                        "input-range__track-wrapper input-range__track-wrapper--crop-right",
                      onMousedown:
                        t[14] ||
                        (t[14] = (...e) =>
                          r.handleTrackMousedown &&
                          r.handleTrackMousedown(...e)),
                    },
                    [
                      (0, s._)(
                        "div",
                        {
                          class:
                            "input-range__track input-range__track--crop-right",
                          style: (0, i.j5)({
                            left: `calc(${
                              100 * r.valueToPercentage(o.thumbPosition)
                            }% - ${o.cropWidth}px)`,
                            right:
                              100 * (1 - r.valueToPercentage(o.cropMax)) + "%",
                          }),
                        },
                        null,
                        4
                      ),
                    ],
                    32
                  ),
                ]),
              ],
              2
            )
          );
        }
        var ot = {
          name: "input-range",
          props: {
            value: { type: Number, default: 0 },
            min: { type: Number, default: 0 },
            minCrop: { type: Number, default: 0 },
            max: { type: Number, default: 100 },
            maxCrop: { type: Number, default: 0 },
            crop: { type: Boolean, default: !1 },
            step: { type: Number, default: 1 },
            decimals: { type: Number, default: 0 },
          },
          watch: {
            value: function (e) {
              this.validateOutputValue(this.thumbPosition) !=
                this.validateOutputValue(e) &&
                (this.thumbPosition = this.validateValue(e));
            },
            min: function (e) {
              (this.cropMin = e), this.updateRange();
            },
            max: function (e) {
              (this.cropMax = e), this.updateRange();
            },
            minCrop: function (e) {
              (this.cropMin = e), this.updateRange();
            },
            maxCrop: function (e) {
              (this.cropMax = e), this.updateRange();
            },
          },
          data() {
            return {
              mousedown: !1,
              mousedownStartValue: null,
              cropLeftDown: !1,
              cropRightDown: !1,
              valueStart: null == this.value ? 0 : this.value,
              cropMin: this.min,
              cropMax: this.max,
              range: this.max - this.min,
              thumbPosition: this.value,
              thumbWidth: 20,
              cropWidth: 10,
              thumbInputActive: !1,
              active: !1,
            };
          },
          methods: {
            handleThumbMousedown(e) {
              e.preventDefault(),
                (this.mousedown = !0),
                e.target == this.$refs["thumb-input"] &&
                  (this.mousedownStartValue = e.clientX);
            },
            handleCropLeftMousedown(e) {
              e.preventDefault(), (this.cropLeftDown = !0);
            },
            handleCropRightMousedown(e) {
              e.preventDefault(), (this.cropRightDown = !0);
            },
            handleThumbMouseup(e) {
              (this.mousedown = !1),
                (this.cropLeftDown = !1),
                (this.cropRightDown = !1),
                this.mousedownStartValue == e.clientX &&
                  ((this.thumbInputActive = !0),
                  null != this.$refs["thumb-input"] &&
                    this.$refs["thumb-input"].focus());
            },
            handleCropLeftMouseup() {
              this.cropLeftDown = !1;
            },
            handleCropRightMouseup() {
              this.cropRightDown = !1;
            },
            handleThumbMousemove(e) {
              this.mousedown &&
                this.updateThumbPosition(
                  this.getClientXAsRangePercentage(
                    e,
                    this.$refs["track-thumb"],
                    !0
                  )
                ),
                this.cropLeftDown &&
                  this.updateCropMin(
                    this.getClientXAsRangePercentage(
                      e,
                      this.$refs["track-crop-left"]
                    )
                  ),
                this.cropRightDown &&
                  this.updateCropMax(
                    this.getClientXAsRangePercentage(
                      e,
                      this.$refs["track-crop-right"]
                    )
                  );
            },
            getClientXAsRangePercentage(e, t, n) {
              e.preventDefault();
              let a = e.clientX;
              if (
                (null == a && null != e.touches && (a = e.touches[0].clientX),
                null == a)
              )
                return;
              let s = t.getBoundingClientRect(),
                i = s.left,
                o = s.right - i,
                r = a - i;
              r < 0 && (r = 0), r > o && (r = o);
              let l = r / o,
                c = this.min + this.range * l;
              return n && (c = this.cropValue(c)), c;
            },
            updateThumbPosition(e) {
              this.thumbPosition = e;
              let t = this.validateOutputValue(e);
              this.$emit("valueChange", t);
            },
            updateCropMax(e) {
              (this.cropMax = e),
                this.$emit("maxChange", this.cropMax),
                this.cropMin > this.cropMax && this.updateCropMin(this.cropMax),
                this.thumbPosition > this.cropMax &&
                  this.updateThumbPosition(this.cropMax);
            },
            updateCropMin(e) {
              (this.cropMin = e),
                this.$emit("minChange", this.cropMin),
                this.cropMax < this.cropMin && this.updateCropMax(this.cropMin),
                this.thumbPosition < this.cropMin &&
                  this.updateThumbPosition(this.cropMin);
            },
            valueToPercentage(e) {
              return (e - this.min) / this.range;
            },
            handleTrackMousedown(e) {
              this.updateThumbPosition(
                this.getClientXAsRangePercentage(
                  e,
                  this.$refs["track-thumb"],
                  !0
                )
              ),
                this.handleThumbMousedown(e);
            },
            handleThumbMouseDown(e) {
              this.thumbInputActive = !1;
              let t = e.path || e.composedPath();
              (this.active = t.indexOf(this.$el) > -1),
                null != this.$refs["thumb-input"] &&
                  this.$refs["thumb-input"].blur();
            },
            updateRange() {
              this.range = this.max - this.min;
            },
            validateOutputValue(e) {
              return (
                null != this.step &&
                  (e =
                    1 === this.step
                      ? Math.floor(e)
                      : parseFloat(
                          (Math.floor(e / this.step) * this.step).toFixed(2)
                        )),
                e
              );
            },
            validateValue(e, t) {
              return t
                ? this.cropValue(e)
                : (e < this.min && (e = this.min),
                  e > this.max && (e = this.max),
                  e);
            },
            cropValue(e) {
              return e < this.cropMin
                ? this.cropMin
                : e > this.cropMax
                ? this.cropMax
                : e;
            },
            handleThumbInputChange(e) {
              null != this.$refs["thumb-input"] &&
                this.$refs["thumb-input"].blur(),
                (this.thumbInputActive = !1);
              let t = parseFloat(e.target.value);
              isNaN(t) ||
                ((t = this.validateValue(t, !0)), this.updateThumbPosition(t));
            },
            formatValueDisplay(e) {
              return e.toFixed(this.decimals);
            },
            getSmallJump() {
              return this.range <= 10 ? 0.1 : 1;
            },
            getBigJump() {
              return this.range <= 10 ? 1 : 10;
            },
            increaseValueSmall() {
              return this.validateValue(
                this.thumbPosition + this.getSmallJump(),
                !0
              );
            },
            increaseValueBig() {
              return this.validateValue(
                this.thumbPosition + this.getBigJump(),
                !0
              );
            },
            decreaseValueSmall() {
              return this.validateValue(
                this.thumbPosition - this.getSmallJump(),
                !0
              );
            },
            decreaseValueBig() {
              return this.validateValue(
                this.thumbPosition - this.getBigJump(),
                !0
              );
            },
            valueUpShortcut(e) {
              let t;
              e.preventDefault(),
                (t = e.shiftKey
                  ? this.increaseValueBig()
                  : this.increaseValueSmall()),
                this.updateThumbPosition(t);
            },
            valueDownShortcut(e) {
              let t;
              e.preventDefault(),
                (t = e.shiftKey
                  ? this.decreaseValueBig()
                  : this.decreaseValueSmall()),
                this.updateThumbPosition(t);
            },
          },
          mounted() {
            window.addEventListener("mousemove", this.handleThumbMousemove),
              window.addEventListener("touchmove", this.handleThumbMousemove),
              window.addEventListener("mouseup", this.handleThumbMouseup),
              window.addEventListener("mousedown", this.handleThumbMouseDown),
              (0, s.Y3)(() => {
                (this.thumbWidth =
                  this.$refs["thumb"].getBoundingClientRect().width),
                  this.crop &&
                    (this.cropWidth =
                      this.$refs["crop-left"].getBoundingClientRect().width);
              }),
              document.addEventListener(
                "keydown",
                (e) => {
                  if (39 === e.keyCode || 38 === e.keyCode) {
                    if (39 === e.keyCode && this.thumbInputActive) return;
                    this.active && this.valueUpShortcut(e);
                  }
                  if (37 === e.keyCode || 40 === e.keyCode) {
                    if (37 === e.keyCode && this.thumbInputActive) return;
                    this.active && this.valueDownShortcut(e);
                  }
                },
                !1
              );
          },
        };
        const rt = (0, A.Z)(ot, [
          ["render", it],
          ["__scopeId", "data-v-16af1ded"],
        ]);
        var lt = rt,
          ct = n(8637);
        function ut() {
          return "production";
        }
        const dt = {
          API: "/api",
          NODE_ENV: "production",
          BASE_URL: "",
          ELECTRON: !!{
            VUE_APP_API: "/api",
            VUE_APP_ID: "font-gauntlet",
            NODE_ENV: "production",
            VUE_APP_BUILD_DATE: "1649178919896",
            VUE_APP_VERSION: "1.2.0",
            BASE_URL: "",
          }.VUE_APP_ELECTRON,
          VERSION: "1.2.0",
          APP_ID: "font-gauntlet",
          APP_ENV: ut(),
          BUILD_DATE: new Date(parseInt("1649178919896")),
          INDEXEDDB_VERSION: 1,
          USER_VERSION: 1.1,
          PREFERENCES_VERSION: 1.1,
          SESSION_VERSION: 1,
          FONT_VERSION: 1,
        };
        var pt = dt,
          gt =
            (n(8675),
            n(3462),
            n(2801),
            {
              introMessage(e, t, n, a, s) {
                console.log(
                  `%cDINAMO%c FONT GAUNTLET%c V${e}`,
                  "color: red; font-family: Helvetica, Arial, sans-serif; Segoe Script; font-size: 22px;",
                  "color: blue; font-family: Apple Chancery, Apple-Chancery, Segoe Script; font-size: 22px;",
                  ""
                ),
                  console.log(
                    `%cApp ID: %c${t}, %cENV: %c${n}, %cStandalone: %c${a}, %cBuild Date: %c${s}`,
                    "color: red;",
                    "color: inherit;",
                    "color: red;",
                    "color: inherit;",
                    "color: red;",
                    "color: inherit;",
                    "color: red;",
                    "color: inherit;"
                  );
              },
              log(e) {
                console.log("%c[FONT GAUNTLET]%c " + e, "color: gold;", "");
              },
              error(e) {
                console.log("%c[FONT GAUNTLET]%c " + e, "color: red;", "");
              },
              getRandomInt(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
              },
              arrayBufferToBase64(e) {
                let t = "",
                  n = new Uint8Array(e),
                  a = n.byteLength;
                for (let s = 0; s < a; s++) t += String.fromCharCode(n[s]);
                return window.btoa(t);
              },
              addBase64FontToDocumentStyle(e, t) {
                let n = document.createElement("style");
                n.appendChild(
                  document.createTextNode(
                    `@font-face { font-family: "${e}"; src: url("data:application/x-font-woff2;base64,${t}"); } `
                  )
                ),
                  document.head.appendChild(n);
              },
              uid() {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                  /[018]/g,
                  (e) =>
                    (
                      e ^
                      (crypto.getRandomValues(new Uint8Array(1))[0] &
                        (15 >> (e / 4)))
                    ).toString(16)
                );
              },
              uidShort() {
                var e = new Date().getTime(),
                  t = "xxxxxx".replace(/[xy]/g, function (t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return (
                      (e = Math.floor(e / 16)),
                      ("x" == t ? n : (3 & n) | 8).toString(16)
                    );
                  });
                return t;
              },
              downloadBase64File(e, t) {
                let n = document.getElementById("download");
                n.setAttribute("href", "data:text/plain;base64," + t),
                  n.setAttribute("download", e),
                  n.click();
              },
              stringStripHtml(e) {
                return e.replace(/<[^<>]+>/gm, "");
              },
              formatDate(e) {
                let t = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ];
                return `${e.getDate()} ${t[e.getMonth()]} ${e.getFullYear()}`;
              },
              versionIsNewNoPatch(e, t) {
                if (null == e || null == t) return !1;
                let n = e.split("."),
                  a = t.split(".");
                return (
                  parseInt(a[0]) > parseInt(n[0]) ||
                  parseInt(a[1]) > parseInt(n[1])
                );
              },
              buildIsNew(e, t) {
                return null == e || (null != t && t > e);
              },
              featureArrayToCSSString(e, t) {
                let n = [];
                for (let a of e)
                  n.push(`${null == t ? '"' : t}${a}${null == t ? '"' : t}`);
                return n.join(", ");
              },
              decToHex(e) {
                let t = e.toString(16);
                return (
                  3 === t.length && (t = "0" + t),
                  2 === t.length && (t = "00" + t),
                  t
                );
              },
              decToHTMLHex(e) {
                let t = e.toString(16);
                return (
                  3 === t.length && (t = "0" + t),
                  2 === t.length && (t = "00" + t),
                  `&#${t};`
                );
              },
              decToHTMLUnicode(e) {
                return `&#${e};`;
              },
              getOpentypeFeaturesArrayAsCssString(e) {
                let t = "";
                for (let n of e) "" !== t && (t += ", "), (t += `"${n}" 1`);
                return t;
              },
              getFilenameFromAxisPosition(e, t) {
                let n = "";
                for (let a in e)
                  n += `${a}${e[a].value.toFixed(
                    this.getAutoDecimalPlaces(e[a].value)
                  )}`;
                return t.split(" ").join("") + "-" + n + ".ttf";
              },
              getFilenameFromInstance(e, t) {
                return (
                  t.split(" ").join("") +
                  "-" +
                  e.name.split(" ").join("") +
                  ".ttf"
                );
              },
              getAutoDecimalPlaces(e) {
                return e < 10 ? 2 : e < 20 ? 1 : 0;
              },
              timeSince(e) {
                const t = new Date();
                let n = Math.floor((t - e) / 1e3),
                  a = Math.floor(n / 60 / 60);
                if (a <= 24)
                  return t.getHours() - a < 0 ? "Yesterday" : "today";
                let s = Math.floor(a / 24);
                if (s < t.getDay() + 7)
                  return t.getDay() - s > 0 ? "this week" : "last week";
                if (
                  e.getFullYear() === t.getFullYear() &&
                  e.getMonth() === t.getMonth()
                )
                  return "this month";
                if (
                  e.getFullYear() === t.getFullYear() &&
                  e.getMonth() === t.getMonth() - 1
                )
                  return "last month";
                if (
                  e.getFullYear() === t.getFullYear() - 1 &&
                  11 === e.getMonth() &&
                  0 === t.getMonth()
                )
                  return "last month";
                if (e.getFullYear() !== t.getFullYear()) {
                  let n = t.getFullYear() - e.getFullYear();
                  return n > 1 ? n + " years ago" : "last year";
                }
                if (e.getMonth() !== t.getMonth()) {
                  let n = t.getMonth() - e.getMonth();
                  return n > 1 ? n + " months ago" : "last month";
                }
              },
              formatVersionShort(e) {
                let t = e.split(".");
                return `${t[0]}.${t[1]}`;
              },
              getRms(e) {
                let t = e.length,
                  n = 0,
                  a = 0;
                while (n < t) a += Math.abs(e[n++]);
                return Math.sqrt(a / t) / 10;
              },
              getAverageVolume(e) {
                let t = 0,
                  n = e.length;
                for (let s = 0; s < n; s++) t += e[s];
                let a = t / n;
                return a / 100;
              },
            });
        function ft(e, t, n) {
          const a = "__BR__";
          (n = n.replace(/(<div(?:.*?)><br>)/g, " " + a + " ")),
            (n = n.replace(/(<(?:br|div)(?:.*?)>)/g, " " + a + " ")),
            (n = n.replace(/(<([^>]+)>)/g, "")),
            (n = n.replace("&gt;", ">")),
            (n = n.replace("&lt;", "<"));
          let s = n.split(/([\s-–—])/);
          s = s.filter((e) => "" !== e);
          let i = [];
          for (let o = 0; o < s.length; o++) {
            let n = s[o];
            if (n !== a) {
              let a = e.measureText(n).width;
              if (a > t) {
                const e = n.split("");
                i = i.concat(e);
              } else i.push(n);
            } else i.push(n);
          }
          return i;
        }
        function ht(
          e,
          t,
          n,
          a,
          s,
          i,
          o,
          r,
          l,
          c = "start",
          u = "top",
          d = "black"
        ) {
          (r *= o),
            (e.fillStyle = d),
            (e.font = `${o}px "${l}"`),
            (e.textBaseline = "bottom"),
            (e.textAlign = c),
            "center" === c ? (n += s / 2) : "right" === c && (n += s);
          let p = ft(e, s, t),
            g = "",
            f = [],
            h = 0;
          function m() {
            f.push(g), (h += r), (g = "");
          }
          for (let b = 0; b < p.length; b++) {
            let t = p[b];
            if ("" === g && t.match(/\s/)) continue;
            if ("__BR__" === t) {
              m();
              continue;
            }
            let n = g + t,
              a = e.measureText(n).width;
            a > s
              ? (m(), b < p.length - 1 && (g = t.match(/\s/) ? "" : t))
              : (g = n);
          }
          "" !== g && m(), "middle" === u && h < i && (a += (i - h) / 2);
          for (let b of f) (a += r), e.fillText(b, n, a);
        }
        var mt = {
            getItem(e) {
              try {
                return JSON.parse(localStorage.getItem(`${pt.APP_ID}-${e}`));
              } catch {
                return null;
              }
            },
            setItem(e, t) {
              localStorage.setItem(`${pt.APP_ID}-${e}`, JSON.stringify(t));
            },
          },
          bt = {
            create() {
              return {
                id: gt.uid(),
                created: new Date().getTime(),
                version: pt.SESSION_VERSION,
                fonts: [],
                tab: null,
                tabs: [],
              };
            },
          },
          vt = {
            version: pt.USER_VERSION,
            lastVersionUsed: null,
            lastBuildDateUsed: null,
          },
          wt = {
            version: pt.PREFERENCES_VERSION,
            darkMode: !1,
            showDinamoFonts: !0,
            defaultTextDirection: "ltr",
            newTabTextCategory: "overview",
            showHiddenFontAxes: !1,
            sidebar: { showColor: !0 },
          },
          yt = {
            create() {
              return {
                id: gt.uid(),
                sessionId: null,
                created: new Date().getTime(),
                version: pt.FONT_VERSION,
                buffer: null,
                name: null,
                filename: null,
              };
            },
          },
          xt = {
            openDb(e) {
              const t = pt.INDEXEDDB_VERSION,
                n = window.indexedDB.open(vs.state.config.APP_ID, t);
              (n.onupgradeneeded = function (e) {
                let t = e.target.result;
                if (!t.objectStoreNames.contains("fonts")) {
                  let e = t.createObjectStore("fonts", {
                    keyPath: "id",
                    autoIncrement: !0,
                  });
                  e.createIndex("sessionId", "sessionId");
                }
                t.objectStoreNames.contains("sessions") ||
                  t.createObjectStore("sessions", {
                    keyPath: "id",
                    autoIncrement: !0,
                  });
              }),
                (n.onerror = function (t) {
                  console.log(t), e(!0, null);
                }),
                (n.onsuccess = function (t) {
                  let n = t.target.result;
                  e(!1, n);
                });
            },
            getLastSession() {
              return new Promise((e) => {
                this.openDb((t, n) => {
                  let a = n.transaction("sessions", "readonly"),
                    s = a.objectStore("sessions"),
                    i = s.openCursor();
                  i.onsuccess = function (t) {
                    let n = t.target.result;
                    e(n ? n.value : null);
                  };
                });
              });
            },
            saveSession() {
              this.openDb((e, t) => {
                e && console.log(e);
                let n = t.transaction("sessions", "readwrite"),
                  a = n.objectStore("sessions"),
                  s = a.clear();
                s.onsuccess = () => {
                  let e = (0, ee.IU)(vs.state.session);
                  for (let t of e.tabs)
                    "text" === t.type && (t.data.text = t.data.liveText);
                  a.put(e);
                };
              });
            },
            getUser() {
              let e = mt.getItem("user"),
                t = e;
              return (null != e && e.version === vt.version) || (t = vt), t;
            },
            saveUser() {
              mt.setItem("user", vs.state.user.data);
            },
            getPreferences() {
              let e = mt.getItem("preferences");
              return (null != e && e.version === wt.version) || (e = wt), e;
            },
            savePreferences() {
              mt.setItem("preferences", vs.state.preferences);
            },
            createSession() {
              let e = bt.create();
              return e;
            },
            createFont() {
              let e = yt.create();
              return e;
            },
            saveFont(e) {
              this.openDb((t, n) => {
                t && console.log(t);
                let a = n.transaction("fonts", "readwrite"),
                  s = a.objectStore("fonts"),
                  i = s.get(e.id);
                i.onsuccess = function () {
                  void 0 == i.result && s.add(e);
                };
              });
            },
            getFontsForSession(e) {
              return new Promise((t, n) => {
                this.openDb((a, s) => {
                  let i = s.transaction("fonts"),
                    o = i.objectStore("fonts"),
                    r = o.index("sessionId"),
                    l = r.getAll(e.id);
                  l.onsuccess = function () {
                    void 0 !== l.result ? t(l.result) : n("No fonts found");
                  };
                });
              });
            },
            deleteOldFonts(e) {
              this.openDb((t, n) => {
                let a = n.transaction("fonts", "readwrite"),
                  s = a.objectStore("fonts"),
                  i = s.openCursor();
                i.onsuccess = function () {
                  let t = i.result;
                  t &&
                    (t.value.sessionId !== e.id && s.delete(t.key),
                    t.continue());
                };
              });
            },
          },
          _t = {
            get(e) {
              return new Promise((t, n) => {
                let a = new XMLHttpRequest();
                a.addEventListener("error", (e) => console.log(e)),
                  a.addEventListener("load", (e) => {
                    200 !== a.status && n();
                    let s = JSON.parse(e.target.response);
                    s.err && n(), t(s);
                  }),
                  a.open("GET", `${pt.API}${e}`),
                  a.send();
              });
            },
            post(e, t = {}) {
              return new Promise((n, a) => {
                fetch(`${pt.API}${e}`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(t),
                })
                  .then((e) => e.json())
                  .then((e) => {
                    e.err && a(), n(e);
                  })
                  .catch((e) => {
                    console.error(e), a();
                  });
              });
            },
            downloadInstanceAtAxisPosition(e, t) {
              return new Promise((n, a) => {
                let s = t,
                  i = new FormData();
                i.append("font", e), i.append("args", JSON.stringify(s));
                let o = new XMLHttpRequest();
                o.addEventListener("error", (e) => console.log(e)),
                  o.addEventListener("load", (e) => {
                    200 !== o.status &&
                      a("There was a problem generating the instance");
                    let t = JSON.parse(e.target.response);
                    t.err && a("There was a problem generating the instance"),
                      n(t);
                  }),
                  o.open("POST", `${pt.API}/gx/instance`),
                  o.send(i);
              });
            },
          },
          St = {
            initApp(e) {
              e.commit("setAppStandalone"),
                gt.introMessage(
                  e.state.config.VERSION,
                  e.state.config.APP_ID,
                  e.state.config.NODE_ENV,
                  e.state.standalone,
                  e.state.config.BUILD_DATE.getTime()
                ),
                e.dispatch("initMessages"),
                e.dispatch("initUser"),
                xt.getLastSession().then((t) => {
                  e.state.lastSessionExists = null != t;
                }),
                e.dispatch("initUrlParamSession");
            },
            initMessages(e) {
              ["production", "staging"].includes(e.state.config.APP_ENV) &&
                _t.get(`/messages/${e.state.config.APP_ENV}`).then((t) => {
                  for (let n of t.messages) e.dispatch("showNotification", n);
                });
            },
            initUrlParamSession(e) {
              const t = window.location.search,
                n = new URLSearchParams(t);
              if (n.has("font")) {
                const t = n.get("font");
                let a = n.get("family-name");
                "" === a && (a = null),
                  null != t &&
                    "" !== t &&
                    e.dispatch("openFontFromUrl", { url: t, familyName: a });
              }
            },
            async togglePresentationMode(e) {
              e.dispatch("updateTabViewMode", null),
                await e.commit("togglePresentationMode"),
                e.state.settings.presentationMode
                  ? (e.dispatch("updateTabFgValue", {
                      name: "centerMode",
                      value: !0,
                    }),
                    await e.commit("setTabDataValue", {
                      name: "autoSizeText",
                      value: !0,
                    }),
                    e.dispatch("autoSizeText"))
                  : (e.commit("setSidebarOpen", !0),
                    e.dispatch("autoSizeText"),
                    e.dispatch("updateTabFgValue", {
                      name: "centerMode",
                      value: !1,
                    }),
                    await e.commit("setTabDataValue", {
                      name: "autoSizeText",
                      value: !1,
                    }));
            },
            toggleSidebar(e) {
              e.commit("setSidebarOpen", !e.state.sidebar.open);
            },
            takeScreenshot(e) {
              e.dispatch("showNotification", {
                name: "screenshot",
                once: !0,
                text: "Taking Screenshots is an experimental/beta feature",
                type: "function",
                icon: "&#128247;",
              });
              const t = 2,
                n = document.querySelector(".text-view"),
                a = n.getBoundingClientRect(),
                s = document.querySelector(".text-view__body"),
                i = s.scrollTop * t,
                o = document.querySelector(".text-view__text"),
                r = window.getComputedStyle(o),
                l = parseInt(r["padding-top"]) * t,
                c = parseInt(r["padding-left"]) * t,
                u = parseInt(r["padding-right"]) * t,
                d = parseInt(r["padding-bottom"]) * t,
                p = document.getElementById("text-view__canvas"),
                g = p.getContext("2d");
              (p.width = a.width * t),
                (p.height = a.height * t),
                g.clearRect(0, 0, p.width, p.height),
                (g.fillStyle = e.getters.bg.backgroundColor),
                g.fillRect(0, 0, p.width, p.height),
                (p.style.fontVariationSettings =
                  e.getters.fontVariationSettings),
                (p.style.fontFeatureSettings =
                  gt.getOpentypeFeaturesArrayAsCssString(
                    e.getters.fg.fontFeatureSettings
                  ) + ' "liga", "calt"');
              let f = e.getters.fg.textAlign;
              "left" === f && "rtl" === e.getters.fg.direction && (f = "right");
              let h = "top";
              e.getters.fg.centerMode && ((f = "center"), (h = "middle")),
                ht(
                  g,
                  e.getters.tab.data.liveText,
                  c,
                  l - i,
                  p.width - c - u,
                  p.height - l - d,
                  e.getters.fg.fontSize * t,
                  e.getters.fg.lineHeight,
                  e.getters.fontFaceId,
                  f,
                  h,
                  e.getters.fg.color
                );
              let m = p.toDataURL("image/png");
              (m = m.replace("data:image/png;base64,", "")),
                gt.downloadBase64File(
                  e.getters.fullFontName.replaceAll(" ", "") +
                    "-" +
                    gt.uidShort() +
                    ".png",
                  m
                );
            },
          },
          Tt = [0.5, 1, 2, 3, 4, 5],
          kt = {
            linear: {
              title: "Linear",
              function: function (e) {
                return e;
              },
            },
            easeInOutQuad: {
              title: "Ease Quad",
              function: function (e) {
                return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
              },
            },
            easeInOutCubic: {
              title: "Ease Cubic",
              function: function (e) {
                return e < 0.5
                  ? 4 * e * e * e
                  : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
              },
            },
            easeInOutQuart: {
              title: "Ease Quart",
              function: function (e) {
                return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
              },
            },
            easeInOutQuint: {
              title: "Ease Quint",
              function: function (e) {
                return e < 0.5
                  ? 16 * e * e * e * e * e
                  : 1 + 16 * --e * e * e * e * e;
              },
            },
          };
        function Ft(e) {
          if (!vs.state.settings.mouseMode) return;
          if (null == vs.getters.axes) return;
          let t = 0;
          for (const [n, a] of Object.entries(vs.getters.axes)) {
            if (t > 1) break;
            let n =
                1 === t
                  ? e.clientX / window.innerWidth
                  : e.clientY / window.innerHeight,
              s = a.min + (a.max - a.min) * n;
            vs.dispatch("updateAxisValue", { axis: a, value: s }), t++;
          }
        }
        var Ct = {
            updateAxisValueFromSlider(e, t) {
              e.dispatch("stopAxisMic", t.axis),
                e.commit("setAxisAnimating", { axis: t.axis, animating: !1 }),
                e.dispatch("updateAxisValue", t);
            },
            updateAxisValue(e, t) {
              (t.value = parseFloat(t.value)),
                t.value < t.axis.minDefault ||
                  t.value > t.axis.maxDefault ||
                  e.commit("setAxisValue", t);
            },
            resetTabFontAxes(e, t) {
              try {
                t.tab.fontData[t.font.id].axes =
                  e.getters.getFontAxesDefaultStates(t.font);
              } catch (n) {
                gt.error("Failed: resetTabFontAxes"), gt.error(n);
              }
            },
            resetTabAllFontAxes(e, t) {
              for (let n in t.tab.fontData) {
                let a = e.getters.getFontById(n);
                e.dispatch("resetTabFontAxes", { tab: t.tab, font: a });
              }
            },
            resetAllAxes(e) {
              e.dispatch("stopTabAxisInteractions"),
                e.dispatch("resetTabAllFontAxes", { tab: e.getters.tab });
            },
            toggleAllAxisAnimating(e) {
              e.getters.animating
                ? e.dispatch("stopAnimation")
                : e.commit("startAxesAnimating"),
                e.getters.animating && e.dispatch("startAnimation");
            },
            toggleAxisSpeed(e, t) {
              let n = Tt.indexOf(e.getters.axes[t].speed),
                a = Tt[(n + 1) % Tt.length];
              e.commit("setAxisSpeed", { axisTag: t, speed: a });
            },
            toggleAnimateAxis(e, t) {
              e.commit("toggleAxisAnimating", t),
                e.getters.animating && e.dispatch("startAnimation");
            },
            startAnimation(e) {
              e.dispatch("resetUserMedia"),
                e.dispatch("stopMouseMode"),
                e.dispatch("animate");
            },
            stopAnimation(e) {
              e.commit("stopAxesAnimating");
            },
            animate(e) {
              e.getters.tab.data.text.length > 50 &&
                e.dispatch("showNotification", {
                  name: "animating-long-texts",
                  once: !0,
                  text: "Animating long texts causes lag",
                  status: "warning",
                }),
                e.dispatch("animateFrame");
            },
            animateFrame(e) {
              if (e.getters.animating) {
                for (const [t, n] of Object.entries(e.getters.axes)) {
                  if (!n.animating) continue;
                  let a = n.value,
                    s = 90;
                  "alternate" === n.loopType &&
                    ((n.t >= 1 && 1 === n.direction) ||
                      (n.t <= 0 && -1 === n.direction)) &&
                    e.commit("swapAnimatingAxisDirection", t);
                  let i = n.t + (1 / s) * n.direction * n.speed;
                  "forwards" === n.loopType && n.t >= 1 && (i = 0),
                    e.commit("setAxisTime", { axisTag: t, t: i });
                  let o = kt[n.easing].function(i);
                  (a = n.min + (n.max - n.min) * o),
                    e.dispatch("updateAxisValue", { axis: n, value: a });
                }
                setTimeout(
                  () =>
                    window.requestAnimationFrame(() =>
                      e.dispatch("animateFrame")
                    ),
                  1e3 / 60
                );
              }
            },
            animateFrameMicrophone(e, t) {
              for (const [n, a] of Object.entries(e.getters.axes)) {
                if (!t.axes.includes(n)) continue;
                let s = a.min + (a.max - a.min) * t.volume;
                e.dispatch("updateAxisValue", { axis: a, value: s });
              }
            },
            toggleMouseMode(e) {
              e.state.settings.mouseMode
                ? e.dispatch("stopMouseMode")
                : e.dispatch("startMouseMode");
            },
            startMouseMode(e) {
              e.dispatch("stopTabAxisInteractions"),
                null != e.getters.axes &&
                  (e.commit("setMouseMode", !0),
                  document.addEventListener("mousemove", Ft));
            },
            stopMouseMode(e) {
              e.commit("setMouseMode", !1),
                document.removeEventListener("mousemove", Ft);
            },
          },
          Dt = n(336);
        const At = n(5145);
        async function Mt(e) {
          return (
            await Vt(),
            new Promise((t, n) => {
              let a = new FileReader();
              (a.onload = (e) => {
                $t(e.target.result)
                  .then((e) => t(e))
                  .catch((e) => n(e));
              }),
                a.readAsArrayBuffer(e);
            })
          );
        }
        async function $t(e) {
          return (
            await Vt(),
            new Promise((t, n) => {
              async function a() {
                try {
                  const n = new Dt.Z("fgf");
                  (n.onload = (e) => t(e.detail.font)),
                    await n.fromDataBuffer(e, "fgf.otf");
                } catch (a) {
                  n(a);
                }
              }
              a();
            })
          );
        }
        async function It(e) {
          return (
            await Vt(),
            new Promise((t, n) => {
              async function a() {
                try {
                  const a = new Dt.Z("fgf");
                  (a.onload = (e) => {
                    t(e.detail.font);
                  }),
                    (a.onerror = (e) => {
                      console.log(e), n(e);
                    }),
                    (a.src = e);
                } catch (a) {
                  console.log(a), n(a);
                }
              }
              a();
            })
          );
        }
        function Vt() {
          return Rt();
        }
        function Pt(e) {
          let t = {};
          if (0 == !!e.opentype.tables.fvar) return t;
          let n = e.opentype.tables.fvar.getSupportedAxes();
          for (let a in n) {
            let s = n[a],
              i = e.opentype.tables.fvar.getAxis(s);
            (t[s] = {
              tag: i.tag,
              index: parseInt(a),
              name: zt(e, i.axisNameID),
              value: i.defaultValue,
              valueDefault: i.defaultValue,
              minDefault: i.minValue,
              maxDefault: i.maxValue,
            }),
              16 == i.flags.length && (t[s]["hidden"] = i.flags[15]);
          }
          return t;
        }
        function Ot(e) {
          const t = e.opentype.tables.GSUB;
          let n = [];
          return (
            null == t ||
              t.getSupportedScripts().forEach((a) => {
                let s = t.getScriptTable(a);
                t.getSupportedLangSys(s).forEach((s) => {
                  let i = t.getLangSysTable(a, s);
                  t.getFeatures(i).forEach((t) => {
                    null == n.find((e) => e.tag === t.featureTag) &&
                      n.push({ tag: t.featureTag, name: Lt(e, t) });
                  });
                });
              }),
            n
          );
        }
        function Lt(e, t) {
          let n = null;
          if (t.featureTag.startsWith("ss")) {
            const a = t.getFeatureParams();
            null != a && "UINameID" in a && (n = zt(e, a.UINameID));
          }
          return null == n && (n = At[t.featureTag]), n;
        }
        function Bt(e) {
          let t = [];
          const n = e.opentype.tables.cmap.encodingRecords.map((e) =>
            e.table.getSupportedCharCodes()
          );
          for (let a of n)
            for (let e of a)
              for (let n = e.start; n <= e.end; n++) t.includes(n) || t.push(n);
          return t;
        }
        function Ht(e) {
          let t = [];
          const { cmap: n, GSUB: a, post: s } = e.opentype.tables,
            i = Bt(e);
          for (let r of i) {
            let a = n.getGlyphId(r),
              i = n.reverse(a),
              o = null;
            2 === s.version &&
              ((o = e.opentype.tables.post.getGlyphName(a)),
              (" " === o[0] || o.length > 30) && (o = null)),
              t.push({
                id: a,
                name: o,
                code: r,
                unicode: i.unicode,
                hex: gt.decToHex(r),
                html: gt.decToHTMLUnicode(r),
                features: [],
              });
          }
          if (null != a)
            try {
              let e = a.getSupportedScripts();
              e.forEach((e) => {
                let n = a.getSupportedLangSys(e);
                n.forEach((n) => {
                  let s = a.getLangSysTable(e, n),
                    i = a.getFeatures(s);
                  i.forEach((e) => {
                    const s = e.lookupListIndices;
                    s.forEach((s) => {
                      const i = a.getLookup(s);
                      if ("dflt" === n)
                        for (let n = 0; n < i.subTableCount; n++) {
                          const a = i.getSubTable(n),
                            s = a.getCoverageTable(),
                            o = jt(s);
                          for (let n of o)
                            if (1 === i.lookupType) {
                              const a = t.find((e) => e.id === n);
                              null != a &&
                                (a.features.includes(e.featureTag) ||
                                  a.features.push(e.featureTag));
                            }
                        }
                    });
                  });
                });
              });
            } catch (o) {
              console.log(o);
            }
          return t;
        }
        function jt(e) {
          if (1 === e.coverageFormat) return e.glyphArray;
          if (2 === e.coverageFormat) {
            let t = [];
            for (let n of e.rangeRecords)
              for (let e = n.startGlyphID; e <= n.endGlyphID; e++) t.push(e);
            return t;
          }
          return [];
        }
        function Nt(e) {
          let t = [];
          if (!e.opentype.tables.fvar) return t;
          for (let n of e.opentype.tables.fvar.instances)
            (n["name"] = zt(e, n.subfamilyNameID)),
              (n["fontVariationSettings"] = Wt(Ut(e, n))),
              (n["id"] = gt.uid()),
              t.push(n);
          return t;
        }
        function zt(e, t) {
          return e.opentype.tables.name.get(t);
        }
        function Et(e, t) {
          let n = {};
          for (let a in t.coordinates) {
            let s = e.opentype.tables.fvar.axes[a];
            n[s.tag] = t.coordinates[a];
          }
          return n;
        }
        function Ut(e, t) {
          let n = Et(e, t);
          for (let a in n) n[a] = { value: n[a], name: Pt(e)[a]["name"] };
          return n;
        }
        function Rt() {
          return new Promise((e) => {
            async function t() {
              if (null == window.unbrotliDynamicImport) {
                const e = await n.e(420).then(n.t.bind(n, 1420, 23));
                window.unbrotliDynamicImport = e.default;
              }
              if (null == window.inflateDynamicImport) {
                const e = await n.e(92).then(n.t.bind(n, 1092, 23));
                window.inflateDynamicImport = e.default.inflate;
              }
              e();
            }
            t();
          });
        }
        function Wt(e) {
          let t = "";
          for (let n in e)
            "" !== t && (t += ", "),
              (t += `"${n}" ${parseFloat(e[n].value.toFixed(4))}`);
          return t;
        }
        function qt(e) {
          let t = e.opentype.tables.name.get(4);
          return null == t || "." === t || "" === t ? null : t;
        }
        var Yt = {
            async openFont(e, { Font: t, disableInstanceGeneration: n }) {
              null != e.state.session
                ? await e.dispatch("replaceFontInSession", t)
                : await e.dispatch("newSessionWithFonts", { fonts: [t] }),
                e.commit("setInstanceGenerationDisabled", !0 === n);
            },
            async openFontFromDropEvent(e, t) {
              if (e.state.window.fileSystemAccess && t.dataTransfer.items) {
                const n = t.dataTransfer.items[0],
                  a = await n.getAsFileSystemHandle();
                e.dispatch("openFontFileHandler", a);
              } else if (t.dataTransfer.files) {
                let n = t.dataTransfer.files[0];
                e.dispatch("openFontFromFile", { file: n });
              }
            },
            async openFontFromFileEvent(e, t) {
              if ((console.log(t), 0 === t.target.files.length)) return;
              let n = t.target.files[0];
              await e.dispatch("openFontFromFile", { file: n });
            },
            async openFontFromFile(e, t) {
              e.dispatch("openSessionPre");
              let n = await Mt(t.file).catch(() => e.dispatch("openFontError"));
              "undefined" !== typeof n &&
                ((n.filename = t.file.name),
                (n.file = t.file),
                t.fileHandle && (n.fileHandle = t.fileHandle),
                await e.dispatch("openFont", { Font: n }));
            },
            async openFontFromUrl(
              e,
              { url: t, familyName: n, disableInstanceGeneration: a }
            ) {
              e.dispatch("openSessionPre");
              let s = await It(t).catch(() => e.dispatch("openFontError"));
              "undefined" !== typeof s &&
                (null != n && (s.customName = n),
                e.dispatch("openFont", {
                  Font: s,
                  disableInstanceGeneration: a,
                }));
            },
            async openSessionPre(e) {
              e.dispatch("showNotification", {
                status: "function",
                type: "spinner",
                length: "quick",
              });
            },
            openFontError(e) {
              e.dispatch("showNotification", {
                text: "There was a problem opening your font",
                status: "danger",
              });
            },
            async openFontFileHandler(e, t) {
              const n = await t.getFile();
              await e.dispatch("openFontFromFile", { file: n, fileHandle: t });
            },
            async openFontWithFileSystemDialog(e) {
              const [t] = await window.showOpenFilePicker();
              e.dispatch("openFontFileHandler", t);
            },
            downloadInstance(e, t) {
              if (e.state.downloadingInstance) return;
              if (!e.getters.isFontVariable) return;
              let n = Ut(e.state.font, t);
              e.commit("setDownloadingInstance", !0),
                _t
                  .downloadInstanceAtAxisPosition(e.state.fontData.file, n)
                  .then(
                    (n) => {
                      e.commit("setDownloadingInstance", !1);
                      let a = gt.getFilenameFromInstance(
                        t,
                        e.getters.fontFamilyName
                      );
                      gt.downloadBase64File(a, n.fontBase64);
                    },
                    (t) => {
                      e.commit("setDownloadingInstance", !1),
                        e.dispatch("showNotification", {
                          text: t,
                          status: "danger",
                        });
                    }
                  );
            },
            downloadCurrentInstance(e) {
              if (!e.state.online) return;
              if (e.state.instanceGenerationDisabled) return;
              if (e.state.downloadingInstance) return;
              if (!e.getters.isFontVariable) return;
              let t = e.getters.axes,
                n = {};
              for (let s in t) n[s] = { value: t[s].value, name: t[s].name };
              e.commit("setDownloadingInstance", !0);
              let a = new File([e.getters.font.buffer], "font.ttf");
              _t.downloadInstanceAtAxisPosition(a, n).then(
                (t) => {
                  e.commit("setDownloadingInstance", !1);
                  let a = gt.getFilenameFromAxisPosition(
                    n,
                    e.getters.fontFamilyName
                  );
                  gt.downloadBase64File(a, t.fontBase64);
                },
                (t) => {
                  e.commit("setDownloadingInstance", !1),
                    e.dispatch("showNotification", {
                      text: t,
                      status: "function",
                    });
                }
              );
            },
            copyCssCode(e) {
              let t = gt.getOpentypeFeaturesArrayAsCssString(
                  e.getters.fg.fontFeatureSettings
                ),
                n = e.getters.fontVariationSettings;
              if ("" === t && "" === n) return;
              let a = ".my-text {";
              "" !== t && (a += `\n\tfont-feature-settings: ${t};`),
                "" !== n && (a += `\n\tfont-variation-settings: ${n};`),
                (a += "\n}"),
                navigator.clipboard.writeText(a),
                e.dispatch("showNotification", {
                  text: `Your CSS code was copied to your clipboard<br><br> <code>${a}</code>`,
                  status: "function",
                  length: "quick",
                  icon: "&#57345;",
                });
            },
          },
          Gt = {
            showNotification(e, t) {
              let n = {
                id: gt.uid(),
                text: t.text,
                status: t.status || "default",
                type: t.type,
                icon: t.icon,
                once: 1 == t.once,
                name: t.name || null,
                color: t.color || null,
              };
              if (e.state.notificationsShown.includes(n.name)) return;
              let a = 4e3;
              "length" in t &&
                (a =
                  "quick" === t.length
                    ? 1500
                    : "infinite" === t.length
                    ? 1e8
                    : t.length),
                (n.length = a),
                e.commit("showNotification", n);
            },
          };
        function Kt(e) {
          return (
            null == e.data && (e.data = {}),
            null == e.open && (e.open = !1),
            null != e.data.text && (e.data.liveText = e.data.text),
            e
          );
        }
        function Zt() {
          return Kt({
            id: gt.uid(),
            type: "text",
            name: "Text",
            title: "Text",
            viewMode: null,
            selectedFonts: [],
            fonts: [],
            fontData: {},
            data: {
              text: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
              liveText: "one",
              axes: {},
              style: { fg: { ...ws() }, bg: { backgroundColor: "#ffffff" } },
            },
          });
        }
        var Xt = {
            async newSessionWithFonts(e, t) {
              let n = xt.createSession();
              e.dispatch("addTabToSession", n);
              let a = [];
              for (let s of t.fonts) {
                let t = await e.dispatch("createFontSource", s);
                (t.sessionId = n.id), a.push(t);
              }
              e.dispatch("loadFontSourcesForSession", {
                session: n,
                fontSources: a,
              }),
                await e.dispatch("openSession", n);
            },
            createFontSource(e, t) {
              let n = xt.createFont();
              return (
                (n.buffer = t.fontData.buffer),
                (n.Font = t),
                null != t.fileHandle && (n.fileHandle = t.fileHandle),
                null != t.file && (n.file = t.file),
                null != t.customName && (n.name = t.customName),
                null != t.filename && (n.filename = t.filename),
                n
              );
            },
            async replaceFontInSession(e, t) {
              let n = await e.getters.getFirstFontForSession(e.state.session),
                a = await e.dispatch("createFontSource", t),
                s = await e.dispatch("loadFontSource", {
                  session: e.state.session,
                  fontSource: a,
                });
              for (let i of e.getters.tabs)
                await e.dispatch("addFontToTab", { tab: i, font: s }),
                  e.dispatch("selectTabFont", { tab: i, font: s });
              e.dispatch("deleteFontFromSession", n);
            },
            addTabToSession(e, t) {
              let n = Zt();
              t.tabs.push(n), (t.tab = n.id);
            },
            addFontToTab(e, t) {
              t.tab.fonts.push(t.font.id),
                (t.tab.fontData[t.font.id] = {
                  axes: e.getters.getFontAxesDefaultStates(t.font),
                }),
                0 === t.tab.selectedFonts.length &&
                  e.dispatch("selectTabFont", t);
            },
            deleteFontFromTab(e, t) {
              e.commit("deleteFontFromTab", t);
            },
            deleteFontFromSession(e, t) {
              for (let n of e.getters.tabs)
                e.dispatch("deleteFontFromTab", { tab: n, font: t });
            },
            selectTabFont(e, t) {
              for (let n of t.tab.selectedFonts) if (t.font.id === n.id) return;
              t.tab.selectedFonts = [t.font.id];
            },
            async openSession(e, t) {
              setTimeout(async () => {
                await e.commit("setCurrentSession", t),
                  e.dispatch("saveSession"),
                  await e.dispatch("deleteOldFonts"),
                  setTimeout(
                    () => e.dispatch("checkForSessionFontHandlerUpdates"),
                    750
                  );
              }, 120);
            },
            checkForSessionFontHandlerUpdates(e) {
              if (
                e.state.window.fileSystemAccess &&
                null != e.state.session &&
                0 != e.state.fonts.length
              ) {
                for (let t of e.state.fonts)
                  null != t.fileHandle &&
                    e.dispatch("checkFontHandlerUpdates", t);
                setTimeout(
                  () => e.dispatch("checkForSessionFontHandlerUpdates"),
                  750
                );
              }
            },
            async checkFontHandlerUpdates(e, t) {
              if (null == t.file || null == t.fileHandle) return;
              const n = await t.fileHandle.getFile();
              if (n.lastModified > t.file.lastModified) {
                const a = await Mt(n);
                null != a &&
                  ((t.file = n), (t.Font = a), e.dispatch("updateFont", t));
              }
            },
            saveSession(e) {
              xt.saveSession(), (e.state.lastSessionExists = !0);
            },
            openLastSession(e) {
              e.dispatch("openSessionPre"),
                xt.getLastSession().then(async (t) => {
                  let n = await xt.getFontsForSession(t);
                  e.dispatch("loadFontSourcesForSession", {
                    fontSources: n,
                    session: t,
                  }),
                    e.dispatch("openSession", t);
                });
            },
            async loadFontSourcesForSession(e, t) {
              for (let n of t.fontSources)
                await e.dispatch("loadFontSource", {
                  fontSource: n,
                  session: t.session,
                });
              for (let n of t.session.tabs)
                0 === n.fonts.length &&
                  e.dispatch("addFontToTab", {
                    tab: n,
                    font: e.getters.getFirstFontForSession(t.session),
                  });
            },
            async loadFontSourceForSession(e, t) {
              await e.dispatch("loadFontSource", t);
            },
            async loadFontSource(e, t) {
              let n = t.fontSource.Font;
              if (
                null == n &&
                ((n = await $t(t.fontSource.buffer).catch(() =>
                  console.log("openFontError")
                )),
                null == n)
              )
                return null;
              let a = {
                name: t.fontSource.name || null,
                filename: t.fontSource.filename || null,
                file: t.fontSource.file || null,
                fileHandle: t.fontSource.fileHandle || null,
                sessionId: t.session.id,
                Font: n,
                id: t.fontSource.id,
              };
              return (
                await e.dispatch("updateFont", a),
                "Font" in t.fontSource && delete t.fontSource["Font"],
                e.state.fonts.push(a),
                xt.saveFont(t.fontSource),
                a
              );
            },
            async updateFont(e, t) {
              let n = gt.uid();
              gt.addBase64FontToDocumentStyle(
                n,
                gt.arrayBufferToBase64(t.Font.fontData.buffer)
              ),
                (t.fontFaceId = n),
                (t.buffer = t.Font.fontData.buffer),
                (t.glyphs = Ht(t.Font)),
                (t.supportedChars = Bt(t.Font)),
                (t.instances = Nt(t.Font)),
                (t.axes = Pt(t.Font)),
                (t.features = Ot(t.Font)),
                (t.variable = !!t.Font.opentype.tables.fvar),
                null == t.name && (t.name = qt(t.Font));
            },
            closeSession(e) {
              e.commit("closeSession");
            },
            deleteOldFonts(e) {
              (e.state.fonts = e.state.fonts.filter(
                (t) => t.sessionId === e.state.session.id
              )),
                xt.deleteOldFonts(e.state.session);
            },
          },
          Jt = {
            runTabShortcut(e, t) {
              null != e.getters.tab && e.dispatch(t);
            },
            decreaseFontSize(e) {
              e.dispatch("updateTabFgValue", {
                name: "fontSize",
                value: e.getters.fg.fontSize - 10,
              });
            },
            increaseFontSize(e) {
              e.dispatch("updateTabFgValue", {
                name: "fontSize",
                value: e.getters.fg.fontSize + 10,
              });
            },
            decreaseLineHeight(e) {
              e.dispatch("updateTabFgValue", {
                name: "lineHeight",
                value: e.getters.fg.lineHeight - 0.05,
              });
            },
            increaseLineHeight(e) {
              e.dispatch("updateTabFgValue", {
                name: "lineHeight",
                value: e.getters.fg.lineHeight + 0.05,
              });
            },
          },
          Qt = {
            setCurrentTab(e, t) {
              e.dispatch("leavingTab", e.getters.tab),
                e.commit("setCurrentTab", t),
                e.dispatch("saveSession");
            },
            previousTab(e) {
              let t = e.getters.tabIndex;
              null != t &&
                1 !== e.getters.tabs.length &&
                0 !== t &&
                e.dispatch("setCurrentTab", e.getters.tabs[t - 1]);
            },
            nextTab(e) {
              let t = e.getters.tabIndex;
              null != t &&
                1 !== e.getters.tabs.length &&
                t !== e.getters.tabs.length - 1 &&
                e.dispatch("setCurrentTab", e.getters.tabs[t + 1]);
            },
            deleteTabByIndex(e, t) {
              let n = e.state.session.tabs[t];
              n.id === e.getters.tab.id &&
                e.dispatch("leavingTab", e.getters.tab),
                e.state.session.tabs.length > 1
                  ? (n.id === e.getters.tab.id &&
                      (0 === t
                        ? e.dispatch("setCurrentTab", e.state.session.tabs[1])
                        : e.dispatch(
                            "setCurrentTab",
                            e.state.session.tabs[t - 1]
                          )),
                    e.commit("deleteTabByIndex", t),
                    e.dispatch("saveSession"))
                  : e.dispatch("closeSession");
            },
            deleteCurrentTab(e) {
              let t = e.getters.tabIndex;
              null != t && e.dispatch("deleteTabByIndex", t);
            },
            leavingTab(e) {
              e.dispatch("stopTabAxisInteractions");
            },
            stopTabAxisInteractions(e) {
              e.dispatch("stopAnimation"),
                e.dispatch("resetUserMedia"),
                e.dispatch("stopMouseMode");
            },
            async addTabToCurrentSession(e) {
              let t = Zt();
              e.dispatch("addFontToTab", {
                tab: t,
                font: e.getters.getFirstFontForSession(e.state.session),
              }),
                e.state.session.tabs.push(t),
                e.dispatch("setCurrentTab", t);
            },
            updateTabFgValue(e, t) {
              if (
                null != e.getters.tab &&
                "undefined" !== typeof t.value &&
                t.value !== e.getters.fg[t.name]
              ) {
                if (t.name in e.state.defaults && "number" == typeof t.value) {
                  let n = e.state.defaults[t.name];
                  "min" in n &&
                    t.value < e.state.defaults[t.name].min &&
                    (t.value = n.min),
                    "max" in n &&
                      t.value > e.state.defaults[t.name].max &&
                      (t.value = n.max);
                }
                e.commit("setTabFgValue", t), e.dispatch("saveSession");
              }
            },
            updateTabBgValue(e, t) {
              null != e.getters.tab &&
                "undefined" !== typeof t.value &&
                t.value !== e.getters.bg[t.name] &&
                (e.commit("setTabBgValue", t), e.dispatch("saveSession"));
            },
            toggleTabDataValue(e, t) {
              if (null == e.getters.tab) return;
              let n = null != t.defaultValue && t.defaultValue,
                a =
                  null == e.getters.tab.data[t.name]
                    ? !n
                    : !e.getters.tab.data[t.name];
              e.commit("setTabDataValue", { name: t.name, value: a });
            },
            toggleTabForegroundBoolean(e, t) {
              null != e.getters.fg &&
                e.dispatch("updateTabFgValue", {
                  name: t,
                  value: !e.getters.fg[t],
                });
            },
            toggleTabForegroundValue(e, t) {
              if (null == e.getters.fg) return;
              let n,
                a = e.getters.fg[t.name];
              null != t.values && null == t.value && 2 === t.values.length
                ? ((n = t.values[0]),
                  0 === t.values.indexOf(a) && (n = t.values[1]))
                : (n = a === t.value ? "" : t.value),
                e.dispatch("updateTabFgValue", { name: t.name, value: n });
            },
            switchBodyTextColors(e) {
              if (null == e.getters.bg) return;
              let t = this.getters.bg.backgroundColor;
              e.dispatch("updateTabBgValue", {
                name: "backgroundColor",
                value: e.getters.fg.color,
              }),
                e.dispatch("updateTabFgValue", { name: "color", value: t });
            },
            switchToInstance(e, t) {
              for (let n in t.coordinates) {
                let a = e.getters.getAxisByIndex(n);
                e.dispatch("updateAxisValue", {
                  axis: a,
                  value: t.coordinates[n],
                }),
                  e.commit("resetAxisAnimatingCrop", a["tag"]);
              }
              "style-range" === e.getters.tab.viewMode &&
                e.dispatch("updateTabViewMode", null);
            },
            forceUpdateTabTextValue(e, t) {
              (t === e.getters.tab.data.liveText &&
                t === e.getters.tab.data.text) ||
                (e.commit("setTabDataValue", { name: "text", value: t }),
                e.commit("setTabDataValue", { name: "liveText", value: t }));
            },
            autoSizeText(e) {
              if (null !== e.getters.viewMode) return;
              let t = e.getters.fg.fontSize,
                n = document.querySelector(
                  ".text-view__body__inner"
                ).clientWidth,
                a = document
                  .getElementById("virtual-text")
                  .getBoundingClientRect().width,
                s = (n / a) * t * 0.9;
              s < 80 && (s = 80),
                e.dispatch("updateTabFgValue", { name: "fontSize", value: s });
            },
            async toggleAutoSizeText(e) {
              await e.dispatch("toggleTabDataValue", { name: "autoSizeText" }),
                e.getters.tab.data.autoSizeText && e.dispatch("autoSizeText");
            },
            syncTabText(e) {
              e.getters.tab.data.text = e.getters.tab.data.liveText;
            },
            updateTabViewMode(e, t) {
              ("" !== t && "default" !== t) || (t = null),
                e.dispatch("stopTabAxisInteractions"),
                "glyphs" === t &&
                  e.dispatch("updateTabFgValue", {
                    name: "fontSize",
                    value: 80,
                  }),
                e.commit("setTabViewMode", t);
            },
            updateTabSearchString(e, t) {
              e.commit("setTabDataValue", { name: "searchString", value: t });
            },
          },
          en = {
            changeTextToSet(e, t) {
              if (null == e.getters.tab) return;
              let n = "";
              if ("all" === t) {
                let e = "",
                  t = [13];
                for (let n of vs.getters.font.glyphs)
                  if (null != n.unicode && -1 === t.indexOf(n.code)) {
                    e += n.unicode;
                    for (let t of n.features)
                      (t.includes("ss") || ["onum"].includes(t)) &&
                        (e += `<span style="font-feature-settings: '${t}'">${n.unicode}</span>`);
                  }
                n = e;
              } else n = e.state.textSets[t].text;
              e.dispatch("forceUpdateTabTextValue", n);
            },
            setTextFromApiPath(e, t, n = null) {
              if (null != e.getters.tab)
                return (
                  null == n && (n = [vs.getters.tab.data.text]),
                  new Promise((a) => {
                    _t.post(t, { exclude: n }).then((t) => {
                      e.dispatch("forceUpdateTabTextValue", t.text), a(t.text);
                    });
                  })
                );
            },
          },
          tn = {
            initUser(e) {
              e.commit("setUserNewVersionVisit"),
                e.commit("setUserNewBuildVisit"),
                e.state.user.newBuildVisit &&
                  e.dispatch("showNotification", {
                    status: "function",
                    text: "Font Gauntlet has been updated since your last visit",
                    icon: "&#x2139;",
                  }),
                e.commit("updateUserLastVersionUsed"),
                e.commit("updateUserLastBuildDateUsed"),
                xt.saveUser();
            },
          },
          nn = {
            startAudioStream() {
              return new Promise((e, t) => {
                navigator.mediaDevices
                  .getUserMedia({ audio: !0, video: !1 })
                  .then((t) => e(t))
                  .catch((e) => t(e));
              });
            },
            stopAudioStream(e) {
              e.getTracks().forEach((e) => e.stop());
            },
            getAnalyserForStream(e) {
              const t = new (window.AudioContext ||
                  window.webkitAudioContext)(),
                n = t.createMediaStreamSource(e);
              let a = t.createAnalyser();
              return (
                (a.fftSize = 2048),
                (a.smoothingTimeConstant = 0.4),
                n.connect(a),
                a
              );
            },
            getVolumeFromAnalyser(e) {
              let t = e.frequencyBinCount,
                n = new Uint8Array(t);
              e.getByteFrequencyData(n);
              let a = gt.getRms(n);
              return a;
            },
          },
          an = {
            resetUserMedia(e) {
              null != e.state.userMedia.stream &&
                (nn.stopAudioStream(e.state.userMedia.stream),
                e.commit("setUserMediaStream", null),
                e.commit("setUserMediaAxes", []));
            },
            toggleMicrophoneAll(e) {
              null == e.state.userMedia.stream
                ? (e.commit(
                    "setUserMediaAxes",
                    Object.keys(e.getters.fontAxes)
                  ),
                  e.dispatch("startMic"))
                : e.dispatch("stopMic");
            },
            async startMic(e) {
              if (null != e.state.userMedia.stream) return;
              let t = await nn.startAudioStream();
              e.commit("setUserMediaStream", t),
                e.dispatch("startMicrophoneSuccess");
            },
            stopMic(e) {
              e.dispatch("resetUserMedia");
            },
            startMicrophoneSuccess(e) {
              const t = nn.getAnalyserForStream(e.state.userMedia.stream);
              e.commit("setUserMediaAnalyser", t),
                e.dispatch("stopAnimation"),
                e.dispatch("stopMouseMode"),
                e.getters.tab.data.text.length > 50 &&
                  e.dispatch("showNotification", {
                    name: "animating-long-texts",
                    once: !0,
                    text: "Animating long texts causes lag",
                    status: "warning",
                  }),
                e.dispatch("microphoneFrame");
            },
            microphoneFrame(e) {
              if (null == e.state.userMedia.stream) return;
              let t = nn.getVolumeFromAnalyser(e.state.userMedia.analyser);
              e.dispatch("animateFrameMicrophone", {
                volume: t,
                axes: e.state.userMedia.axes,
              }),
                setTimeout(
                  () =>
                    window.requestAnimationFrame(() =>
                      e.dispatch("microphoneFrame")
                    ),
                  1e3 / 60
                );
            },
            async toggleAxisMic(e, t) {
              e.state.userMedia.axes.includes(t.tag)
                ? await e.dispatch("stopAxisMic", t)
                : await e.commit("pushUserMediaAxes", t.tag),
                e.dispatch("afterMicUpdate");
            },
            stopAxisMic(e, t) {
              e.state.userMedia.axes.includes(t.tag) &&
                e.commit(
                  "setUserMediaAxes",
                  e.state.userMedia.axes.filter((e) => e != t.tag)
                ),
                e.dispatch("afterMicUpdate");
            },
            afterMicUpdate(e) {
              0 === e.state.userMedia.axes.length
                ? e.dispatch("stopMic")
                : e.dispatch("startMic");
            },
          },
          sn = {
            ...St,
            ...Ct,
            ...Yt,
            ...Gt,
            ...Xt,
            ...Jt,
            ...Qt,
            ...en,
            ...tn,
            ...an,
          },
          on = {
            lastUpdated: (e) => gt.timeSince(e.config.BUILD_DATE),
            online: (e) => e.online,
            server: (e) => e.server,
          },
          rn = {
            axes: (e, t) => (null == t.font ? null : t.fontTabData.axes),
            fontSourceAxes: (e, t) => (null == t.font ? null : t.font.axes),
            getAxisByIndex: (e, t) => (e) => {
              if (null != t.axes) {
                e = parseInt(e);
                for (let n of Object.values(t.axes))
                  if (n.index === e) return n;
                return null;
              }
            },
            animating: (e, t) => {
              for (const [n, a] of Object.entries(t.axes))
                if (a.animating) return !0;
              return !1;
            },
            doesCurrentAxesPositionsMatchAnInstance: (e, t) => {
              if (!t.isFontVariable) return null;
              if (null == t.axes || 0 == t.axes.length) return null;
              for (let n of t.instances) {
                let e = !0;
                for (let a in n.coordinates) {
                  let s = t.font.Font.opentype.tables.fvar.axes[a];
                  if (
                    parseInt(t.axes[s["tag"]].value) !==
                    parseInt(n.coordinates[a])
                  ) {
                    e = !1;
                    break;
                  }
                }
                if (e) return n;
              }
              return null;
            },
            getFontAxesDefaultStates: (e, t) => (e) => {
              let n = {};
              for (let a in e.axes) n[a] = t.getFontAxisDefaultState(e.axes[a]);
              return n;
            },
            getFontAxisDefaultState: () => (e) => ({
              ...e,
              min: e.minDefault,
              max: e.maxDefault,
              value: e.valueDefault,
              animating: !1,
              direction: 1,
              speed: 1,
              t: 0,
              loopType: "alternate",
              easing: "easeInOutQuad",
            }),
          },
          ln = {
            instances: (e, t) => (null == t.font ? null : t.font.instances),
            getFontById: (e) => (t) =>
              null == e.session ? null : e.fonts.find((e) => e.id === t),
            fonts: (e, t) => (null == t.session ? null : e.fonts),
            font: (e, t) =>
              null == t.tab || 0 === t.tab.fonts.length
                ? null
                : 0 === t.tab.selectedFonts.length
                ? t.getFontById(t.tab.fonts[0])
                : t.getFontById(t.tab.selectedFonts[0]),
            getFirstFontForSession: (e) => (t) => {
              for (let n of e.fonts) if (n.sessionId === t.id) return n;
              return null;
            },
            fontTabData: (e, t) =>
              null == t.fontId ? null : t.tab.fontData[t.fontId],
            Font: (e, t) => (null == t.fontId ? null : t.font.Font),
            fontId: (e, t) =>
              null == t.tab || 0 == t.tab.selectedFonts.length
                ? null
                : t.tab.selectedFonts[0],
            fontFaceId: (e, t) =>
              null == t.tab || 0 == t.tab.selectedFonts.length
                ? null
                : t.getFontById(t.tab.selectedFonts[0]).fontFaceId,
            fontAxes: (e, t) => (null == t.font ? {} : t.font.axes),
            fullFontName: (e, t) =>
              null == t.font.name
                ? null != t.font.filename
                  ? t.font.filename
                  : "Empty Font Name"
                : t.font.name,
            fontFamilyName: (e, t) => {
              let n = t.font.Font.opentype.tables.name.get(1);
              return "." === n ? "Empty Font Name" : n;
            },
            fontFeatures: (e, t) => (null == t.font ? [] : t.font.features),
            isFontVariable: (e, t) => null != t.font && 1 == t.font.variable,
            fontVariationSettings: (e, t) => Wt(t.axes),
            fontTotalGlyphs: (e) =>
              null == e.fontData.meta
                ? 0
                : Object.keys(e.fontData.meta.cmap).length,
            isFontUsedByAnyTabs: (e, t) => (e) => {
              for (let n of t.tabs) if (e.id in n.fonts) return !0;
              return !1;
            },
          },
          cn = { sessionId: (e) => (null == e.session ? null : e.session.id) },
          un = {
            tab: (e, t) =>
              null == e.session ? null : t.getTabById(e.session.tab),
            tabAxis: (e, t) => (e) => null == t.axes[e] ? null : t.axes[e],
            tabs: (e) => (null == e.session ? [] : e.session.tabs),
            getTabById: (e) => (t) => {
              for (let n of e.session.tabs) if (n.id === t) return n;
              return null;
            },
            tabIndex: (e, t) => {
              if (null == t.tab) return null;
              for (let n in e.session.tabs)
                if (e.session.tabs[parseInt(n)].id === t.tab.id)
                  return parseInt(n);
              return null;
            },
            fg: (e, t) => (null == t.tab ? null : t.tab.data.style.fg),
            bg: (e, t) => (null == t.tab ? null : t.tab.data.style.bg),
            tabData: (e, t) => (null == t.tab ? null : t.tab.data),
            searchString: (e, t) =>
              null == t.tab ? null : t.tab.data.searchString,
            waterfallMode: (e, t) =>
              null != t.tabData &&
              null != t.tabData.waterfallMode &&
              t.tabData.waterfallMode,
            viewMode: (e, t) => (null == t.tab ? null : t.tab.viewMode),
            mouseMode: (e) => e.settings.mouseMode,
            axesInteractionActive: (e, t) => t.mouseMode || t.userMediaActive,
          },
          dn = { userMediaActive: (e) => null != e.userMedia.stream },
          pn = { ...on, ...rn, ...ln, ...un, ...cn, ...dn },
          gn = {
            windowLoaded(e) {
              e.window.loaded = !0;
            },
            togglePresentationMode(e) {
              e.settings.presentationMode = !e.settings.presentationMode;
            },
            setTabViewMode(e, t) {
              this.getters.tab.viewMode = t;
            },
            setMouseMode(e, t) {
              e.settings.mouseMode = t;
            },
            setDownloadingInstance(e, t) {
              e.downloadingInstance = t;
            },
            setOnline(e, t) {
              (e.online = t), (e.server = !!e.dev || t);
            },
            setAppStandalone(e) {
              e.standalone = window.matchMedia(
                "(display-mode: standalone)"
              ).matches;
            },
            resetApplication() {},
            setSidebarOpen(e, t) {
              e.sidebar.open = t;
            },
            setGlyphsSearch(e, t) {
              e.glyphsSearch = t;
            },
            setInstanceGenerationDisabled(e, t) {
              e.instanceGenerationDisabled = t;
            },
          },
          fn = {
            setAxisValue(e, t) {
              t.axis.value = t.value;
            },
            setAxisAnimating(e, t) {
              t.axis.animating = t.animating;
            },
            stopAxesAnimating() {
              for (const [e, t] of Object.entries(this.getters.axes))
                t.animating = !1;
            },
            startAxesAnimating() {
              for (const [e, t] of Object.entries(this.getters.axes))
                t.animating = !0;
            },
            resetAxisAnimatingCrop(e, t) {
              (vs.getters.axes[t].min = vs.getters.axes[t].minDefault),
                (vs.getters.axes[t].max = vs.getters.axes[t].maxDefault);
            },
            toggleAxisAnimating(e, t) {
              vs.getters.axes[t].animating = !vs.getters.axes[t].animating;
            },
            setAxisSpeed(e, t) {
              vs.getters.axes[t.axisTag].speed = t.speed;
            },
            stopAxisAnimate(e, t) {
              vs.getters.axes[t.axisTag].animating = !1;
            },
            setAxisTime(e, t) {
              vs.getters.axes[t.axisTag].t = t.t;
            },
            setAxisMin(e, t) {
              vs.getters.axes[t.axisTag].min = t.value;
            },
            setAxisMax(e, t) {
              vs.getters.axes[t.axisTag].max = t.value;
            },
            setAxisEasing(e, t) {
              vs.getters.axes[t.axisTag].easing = t.easing;
            },
            swapAnimatingAxisDirection(e, t) {
              vs.getters.axes[t].direction = -1 * vs.getters.axes[t].direction;
            },
          },
          hn = {},
          mn = {
            showNotification(e, t) {
              (t.timeout = setTimeout(() => {
                this.commit("removeNotification", t);
              }, t.length)),
                e.notifications.unshift(t),
                null != t.name &&
                  (e.notificationsShown.includes(t.name) ||
                    e.notificationsShown.push(t.name));
            },
            removeNotification(e, t) {
              for (let n = 0; n < e.notifications.length; n++)
                if (e.notifications[n].id === t.id) {
                  t.timeout && clearTimeout(t.timeout),
                    e.notifications.splice(n, 1);
                  break;
                }
            },
            removeOldestNotification(e) {
              e.notifications.shift();
            },
          };
        function bn(e, t, n, a, i, o) {
          const r = (0, s.up)("panel");
          return (
            (0, s.wg)(),
            (0, s.j4)(r, { tabs: i.tabs, startTab: o.currentTab }, null, 8, [
              "tabs",
              "startTab",
            ])
          );
        }
        const vn = (e) => (
            (0, s.dD)("data-v-47de6ff6"), (e = e()), (0, s.Cn)(), e
          ),
          wn = { key: 0 },
          yn = vn(() => (0, s._)("br", null, null, -1)),
          xn = vn(() => (0, s._)("br", null, null, -1)),
          _n = vn(() => (0, s._)("br", null, null, -1)),
          Sn = { key: 0, class: "big changelog__new" },
          Tn = (0, s.Uk)(
            " Font Gauntlet has been updated since your last visit."
          ),
          kn = vn(() => (0, s._)("br", null, null, -1)),
          Fn = vn(() => (0, s._)("br", null, null, -1)),
          Cn = [Tn, kn, Fn],
          Dn = { key: 0, class: "changelog__new" },
          An = vn(() => (0, s._)("br", null, null, -1));
        function Mn(e, t, n, a, o, r) {
          return o.changelog
            ? ((0, s.wg)(),
              (0, s.iD)("div", wn, [
                (0, s._)("p", null, [
                  (0, s.Uk)(
                    " Last Updated " +
                      (0, i.zw)(e.$store.getters.lastUpdated) +
                      " (V" +
                      (0, i.zw)(e.$store.state.config.VERSION) +
                      ", " +
                      (0, i.zw)(
                        o.utils.formatDate(e.$store.state.config.BUILD_DATE)
                      ) +
                      ")",
                    1
                  ),
                  yn,
                  xn,
                  _n,
                ]),
                e.$store.getters.userNewVersionVisit
                  ? ((0, s.wg)(), (0, s.iD)("p", Sn, Cn))
                  : (0, s.kq)("", !0),
                ((0, s.wg)(!0),
                (0, s.iD)(
                  s.HY,
                  null,
                  (0, s.Ko)(
                    o.changelog,
                    (t, n) => (
                      (0, s.wg)(),
                      (0, s.iD)(
                        s.HY,
                        { key: n },
                        [
                          (0, s._)("h4", null, [
                            (0, s.Uk)(
                              " V" +
                                (0, i.zw)(t.version) +
                                " (" +
                                (0, i.zw)(t.date) +
                                ")",
                              1
                            ),
                            0 === n && e.$store.state.user.newVersionVisit
                              ? ((0, s.wg)(), (0, s.iD)("sup", Dn, " NEW"))
                              : (0, s.kq)("", !0),
                          ]),
                          (0, s._)("ul", null, [
                            ((0, s.wg)(!0),
                            (0, s.iD)(
                              s.HY,
                              null,
                              (0, s.Ko)(
                                t.notes,
                                (e, t) => (
                                  (0, s.wg)(),
                                  (0, s.iD)("li", { key: t }, (0, i.zw)(e), 1)
                                )
                              ),
                              128
                            )),
                          ]),
                          An,
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]))
            : (0, s.kq)("", !0);
        }
        var $n = {
          name: "changelog",
          title: "Changelog",
          data() {
            return { changelog: [], utils: gt };
          },
          methods: {
            close() {
              this.$store.commit("updateLastVersionUsed");
            },
          },
          created() {
            _t.get("/changelog").then((e) => {
              this.changelog = e.data;
            });
          },
        };
        const In = (0, A.Z)($n, [
          ["render", Mn],
          ["__scopeId", "data-v-47de6ff6"],
        ]);
        var Vn = In;
        function Pn(e, t, n, a, i, o) {
          const r = (0, s.up)("info-test");
          return (0, s.wg)(), (0, s.j4)(r);
        }
        const On = (0, s.RC)(() => n.e(525).then(n.bind(n, 8525)));
        var Ln = {
          name: "info",
          title: "Info",
          height: 800,
          components: { "info-test": On },
        };
        const Bn = (0, A.Z)(Ln, [["render", Pn]]);
        var Hn = Bn;
        const jn = (e) => (
            (0, s.dD)("data-v-ca1a3cc0"), (e = e()), (0, s.Cn)(), e
          ),
          Nn = { class: "section" },
          zn = ["onClick"],
          En = { key: 0, class: "icon" },
          Un = { key: 1, class: "icon", style: { color: "#999999" } },
          Rn = (0, s.Uk)("  "),
          Wn = ["innerHTML"],
          qn = ["innerHTML"],
          Yn = { key: 1, class: "button-group" },
          Gn = ["onClick", "innerHTML"],
          Kn = { class: "section bleed" },
          Zn = jn(() =>
            (0, s._)(
              "h4",
              null,
              [
                (0, s._)("br"),
                (0, s._)("br"),
                (0, s.Uk)("Shortcuts"),
                (0, s._)("br"),
                (0, s._)("br"),
              ],
              -1
            )
          ),
          Xn = { key: 0 },
          Jn = { class: "key" };
        function Qn(e, t, n, a, o, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)(
              s.HY,
              null,
              [
                (0, s._)("div", Nn, [
                  ((0, s.wg)(!0),
                  (0, s.iD)(
                    s.HY,
                    null,
                    (0, s.Ko)(
                      o.preferences,
                      (t, n) => (
                        (0, s.wg)(),
                        (0, s.iD)(
                          "div",
                          { class: "row flex rw jc-sb ai-c", key: n },
                          [
                            (0, s._)("h5", null, (0, i.zw)(t.name), 1),
                            "toggle" === t.type
                              ? ((0, s.wg)(),
                                (0, s.iD)(
                                  "button",
                                  {
                                    key: 0,
                                    class: "button",
                                    onClick: (n) =>
                                      e.$store.commit(
                                        "togglePreferenceValue",
                                        t.key
                                      ),
                                  },
                                  [
                                    e.$store.state.preferences[t.key]
                                      ? ((0, s.wg)(),
                                        (0, s.iD)("span", En, ""))
                                      : ((0, s.wg)(),
                                        (0, s.iD)("span", Un, "")),
                                    Rn,
                                    e.$store.state.preferences[t.key]
                                      ? ((0, s.wg)(),
                                        (0, s.iD)(
                                          "span",
                                          {
                                            key: 2,
                                            innerHTML:
                                              (t.text && t.text.true) || "On",
                                          },
                                          null,
                                          8,
                                          Wn
                                        ))
                                      : ((0, s.wg)(),
                                        (0, s.iD)(
                                          "span",
                                          {
                                            key: 3,
                                            innerHTML:
                                              (t.text && t.text.false) || "Off",
                                          },
                                          null,
                                          8,
                                          qn
                                        )),
                                  ],
                                  8,
                                  zn
                                ))
                              : "select" === t.type
                              ? ((0, s.wg)(),
                                (0, s.iD)("div", Yn, [
                                  ((0, s.wg)(!0),
                                  (0, s.iD)(
                                    s.HY,
                                    null,
                                    (0, s.Ko)(
                                      t.options,
                                      (n, a) => (
                                        (0, s.wg)(),
                                        (0, s.iD)(
                                          "button",
                                          {
                                            key: a,
                                            class: (0, i.C_)({
                                              active:
                                                e.$store.state.preferences[
                                                  t.key
                                                ] == a,
                                            }),
                                            onClick: (n) =>
                                              e.$store.commit(
                                                "setPreferenceValue",
                                                { name: t.key, value: a }
                                              ),
                                            innerHTML: n,
                                          },
                                          null,
                                          10,
                                          Gn
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]))
                              : (0, s.kq)("", !0),
                          ]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                (0, s._)("div", Kn, [
                  Zn,
                  ((0, s.wg)(!0),
                  (0, s.iD)(
                    s.HY,
                    null,
                    (0, s.Ko)(
                      o.shortcuts,
                      (e, t) => (
                        (0, s.wg)(),
                        (0, s.iD)(
                          "div",
                          { key: t, class: "shortcut-row flex rw jc-sb ai-c" },
                          [
                            (0, s._)("h5", null, (0, i.zw)(e.name), 1),
                            (0, s._)("div", null, [
                              ((0, s.wg)(!0),
                              (0, s.iD)(
                                s.HY,
                                null,
                                (0, s.Ko)(
                                  e.keys,
                                  (e, t) => (
                                    (0, s.wg)(),
                                    (0, s.iD)("span", { key: t }, [
                                      t > 0
                                        ? ((0, s.wg)(),
                                          (0, s.iD)("span", Xn, "  "))
                                        : (0, s.kq)("", !0),
                                      (0, s._)("span", Jn, (0, i.zw)(e), 1),
                                    ])
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              64
            )
          );
        }
        var ea = {
          name: "settings",
          title: "Settings",
          width: 560,
          data() {
            return {
              preferences: [
                {
                  name: "Show Dinamo Fonts on start page",
                  key: "showDinamoFonts",
                  type: "toggle",
                  text: {
                    true: '<span class="icon">&#57360;</span>',
                    false: '<span class="icon">&#57361;</span>',
                  },
                },
                {
                  name: "Default Text Direction",
                  key: "defaultTextDirection",
                  type: "select",
                  options: { ltr: "&nbsp;LTR&nbsp;", rtl: "&nbsp;RTL&nbsp;" },
                },
                {
                  name: "Show Hidden Font Axes",
                  key: "showHiddenFontAxes",
                  type: "toggle",
                },
              ],
              shortcuts: [
                { keys: ["CMD", "+"], name: "Increase font size" },
                { keys: ["CMD", "−"], name: "Decrease font size" },
                { keys: ["CMD", "SHIFT", "+"], name: "Increase line height" },
                { keys: ["CMD", "SHIFT", "−"], name: "Decrease line height" },
              ],
            };
          },
        };
        const ta = (0, A.Z)(ea, [
          ["render", Qn],
          ["__scopeId", "data-v-ca1a3cc0"],
        ]);
        var na = ta;
        const aa = (e) => (
            (0, s.dD)("data-v-45c17527"), (e = e()), (0, s.Cn)(), e
          ),
          sa = { key: 0, class: "features" },
          ia = { class: "features-list custom-scrollbar" },
          oa = { class: "feature", ref: "feature-video-wrapper" },
          ra = { class: "feature__media__wrapper" },
          la = ["src"],
          ca = ["src"],
          ua = { key: 0, class: "feature__text" },
          da = {
            key: 1,
            class: "flex jc-c ai-c",
            style: { width: "100%", height: "95%" },
          },
          pa = aa(() =>
            (0, s._)(
              "div",
              { class: "ta-c", style: { color: "var(--color--dark)" } },
              [
                (0, s._)("h2", null, [
                  (0, s._)("span", { class: "icon" }, ""),
                  (0, s._)("br"),
                ]),
                (0, s._)("h5", null, [
                  (0, s._)("br"),
                  (0, s.Uk)("Connect to the internet to view Features"),
                ]),
              ],
              -1
            )
          ),
          ga = [pa];
        function fa(e, t, n, o, r, l) {
          const c = (0, s.up)("card");
          return e.$store.state.online
            ? ((0, s.wg)(),
              (0, s.iD)("div", sa, [
                (0, s._)("div", ia, [
                  ((0, s.wg)(!0),
                  (0, s.iD)(
                    s.HY,
                    null,
                    (0, s.Ko)(
                      r.features,
                      (e, t) => (
                        (0, s.wg)(),
                        (0, s.j4)(
                          c,
                          {
                            key: t,
                            html: e.text,
                            icon: e.icon,
                            onMouseover: (t) => (r.currentFeature = e),
                          },
                          {
                            default: (0, s.w5)(() => [
                              (0, s._)("h5", null, (0, i.zw)(e.name), 1),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["html", "icon", "onMouseover"]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                (0, s._)(
                  "div",
                  oa,
                  [
                    r.showVideo
                      ? ((0, s.wg)(),
                        (0, s.iD)(
                          "div",
                          {
                            key: 0,
                            class: "feature__media",
                            style: (0, i.j5)({
                              width: `calc(${r.videoSize}px - var(--padding) * 9)`,
                              height: `calc(${r.videoSize}px -\n                    var(--padding) * 9)`,
                            }),
                          },
                          [
                            (0, s.Wm)(
                              a.uT,
                              { name: "component-fade", appear: "" },
                              {
                                default: (0, s.w5)(() => [
                                  ((0, s.wg)(),
                                  (0, s.iD)(
                                    "div",
                                    { key: r.currentFeature.media },
                                    [
                                      (0, s._)("div", ra, [
                                        r.currentFeature.media.includes(".mp4")
                                          ? ((0, s.wg)(),
                                            (0, s.iD)(
                                              "video",
                                              {
                                                key: 0,
                                                src: `/static/media/${r.currentFeature.media}`,
                                                loop: "",
                                                muted: "",
                                                autoplay: "",
                                              },
                                              null,
                                              8,
                                              la
                                            ))
                                          : ((0, s.wg)(),
                                            (0, s.iD)(
                                              "img",
                                              {
                                                key: 1,
                                                src: `/static/media/${r.currentFeature.media}`,
                                              },
                                              null,
                                              8,
                                              ca
                                            )),
                                      ]),
                                      r.currentFeature.text
                                        ? ((0, s.wg)(),
                                          (0, s.iD)(
                                            "div",
                                            ua,
                                            (0, i.zw)(r.currentFeature.text),
                                            1
                                          ))
                                        : (0, s.kq)("", !0),
                                    ]
                                  )),
                                ]),
                                _: 1,
                              }
                            ),
                          ],
                          4
                        ))
                      : (0, s.kq)("", !0),
                  ],
                  512
                ),
              ]))
            : ((0, s.wg)(), (0, s.iD)("div", da, ga));
        }
        const ha = { class: "card" },
          ma = { class: "flex rw ai-c" },
          ba = { key: 0, class: "card__icon", style: { flex: "0 0 auto" } },
          va = ["innerHTML"],
          wa = (0, s.Uk)("  ");
        function ya(e, t, n, a, i, o) {
          return (
            (0, s.wg)(),
            (0, s.iD)("div", ha, [
              (0, s._)("div", ma, [
                n.icon
                  ? ((0, s.wg)(),
                    (0, s.iD)("div", ba, [
                      (0, s._)(
                        "span",
                        { class: "icon", innerHTML: n.icon },
                        null,
                        8,
                        va
                      ),
                      wa,
                    ]))
                  : (0, s.kq)("", !0),
                (0, s.WI)(e.$slots, "default", {}, void 0, !0),
              ]),
            ])
          );
        }
        var xa = { name: "card", props: ["html", "icon"] };
        const _a = (0, A.Z)(xa, [
          ["render", ya],
          ["__scopeId", "data-v-cf397848"],
        ]);
        var Sa = _a;
        const Ta = [
          { name: "Audio Mode", media: "fg-audio-mode.mp4", icon: "&#127908;" },
          { name: "Mouse Mode", media: "fg-mouse-mode.mp4", icon: "&#57352;" },
          {
            name: "Waterfall View",
            media: "fg-waterfall-view.mp4",
            icon: "&#57353;",
          },
          {
            name: "Presentation View",
            media: "fg-presentation-view.mp4",
            icon: "&#57347;",
          },
          {
            name: "Center Mode",
            media: "fg-center-mode.mp4",
            icon: "&#57346;",
          },
          {
            name: "Auto Text Size",
            media: "fg-auto-size-text.mp4",
            icon: "&#57348;",
          },
          {
            name: "Variable Animations",
            media: "fg-animation.mp4",
            icon: "&#61515;",
          },
          {
            name: "Axis Clipping",
            media: "fg-axis-clipping.mp4",
            icon: "&#57362;",
          },
          {
            name: "Instance Generation",
            media: "fg-generate-instance.mp4",
            icon: "&#61465;",
          },
          {
            name: "Offline Mode",
            media: "fg-offline.png",
            icon: "&#57351;",
            text: "fontgauntlet.com caches locally in your browser. Access Font Gauntlet anywhere, anytime!",
          },
          {
            name: "Install as App with Chrome",
            media: "fg-install.png",
            icon: "&#57360;",
            text: "You can use Font Gauntlet as a standalone Chrome app by installing from the search bar. Add it to your dock for daily use!",
          },
        ];
        var ka = {
          name: "features",
          title: "Features",
          width: 920,
          padding: !1,
          components: { Card: Sa },
          data() {
            return {
              showVideo: !1,
              videoSize: 0,
              currentFeature: Ta[0],
              features: Ta,
            };
          },
          methods: {
            updateVideoSize() {
              let e = this.$refs["feature-video-wrapper"],
                t = e.getBoundingClientRect();
              t.width < t.height
                ? (this.videoSize = t.width)
                : (this.videoSize = t.height);
            },
          },
          mounted() {
            setTimeout(() => {
              this.updateVideoSize(), (this.showVideo = !0);
            }, 400);
          },
        };
        const Fa = (0, A.Z)(ka, [
          ["render", fa],
          ["__scopeId", "data-v-45c17527"],
        ]);
        var Ca = Fa,
          Da = {
            name: "dashboard",
            data() {
              return {
                tabs: [
                  (0, ee.Xl)(Hn),
                  (0, ee.Xl)(Ca),
                  (0, ee.Xl)(na),
                  (0, ee.Xl)(Vn),
                ],
              };
            },
            computed: {
              currentTab: function () {
                return this.tabs.find(
                  (e) => e.name === this.$store.state.dashboardTabName
                );
              },
            },
            components: { Panel: R },
          };
        const Aa = (0, A.Z)(Da, [["render", bn]]);
        var Ma = Aa;
        function $a(e, t, n, a, i, o) {
          const r = (0, s.up)("panel");
          return (
            (0, s.wg)(),
            (0, s.j4)(r, { tabs: i.tabs, showTitleBar: !0 }, null, 8, ["tabs"])
          );
        }
        function Ia(e, t, n, a, i, o) {
          const r = (0, s.up)("object-viewer");
          return (
            (0, s.wg)(),
            (0, s.iD)("section", null, [
              e.$store.getters.font
                ? ((0, s.wg)(),
                  (0, s.j4)(
                    r,
                    {
                      key: 0,
                      thisObject: o.tables,
                      level: 0,
                      hideFunctions: !0,
                    },
                    null,
                    8,
                    ["thisObject"]
                  ))
                : (0, s.kq)("", !0),
            ])
          );
        }
        const Va = (e) => (
            (0, s.dD)("data-v-13c33570"), (e = e()), (0, s.Cn)(), e
          ),
          Pa = { key: 0 },
          Oa = ["onClick", "data-level"],
          La = { key: 0, class: "arrow" },
          Ba = { key: 1 },
          Ha = { class: "key" },
          ja = Va(() => (0, s._)("span", { class: "colon" }, "​: ", -1)),
          Na = { key: 2, class: "value string" },
          za = { key: 3, class: "value number" },
          Ea = { key: 4, class: "value boolean" },
          Ua = { key: 0, class: "value number ns" },
          Ra = { key: 1, class: "value number ns" },
          Wa = { key: 2, class: "value-empty" },
          qa = { key: 3, class: "value-length" };
        function Ya(e, t, n, a, o, r) {
          const l = (0, s.up)("object-viewer-recursive");
          return o.ready
            ? ((0, s.wg)(),
              (0, s.iD)("div", Pa, [
                ((0, s.wg)(!0),
                (0, s.iD)(
                  s.HY,
                  null,
                  (0, s.Ko)(
                    r.keys,
                    (e, t) => (
                      (0, s.wg)(),
                      (0, s.iD)(
                        s.HY,
                        { key: t },
                        [
                          (0, s._)(
                            "div",
                            {
                              class: (0, i.C_)([
                                "code-row",
                                { open: o.keysOpened[e] },
                              ]),
                              onClick: (t) => r.toggleKeyOpen(e),
                              "data-level": n.level,
                            },
                            [
                              (0, s.Uk)((0, i.zw)(r.indent) + " ", 1),
                              r.isObject(n.thisObject[e])
                                ? ((0, s.wg)(),
                                  (0, s.iD)(
                                    "span",
                                    La,
                                    (0, i.zw)(o.keysOpened[e] ? "▼" : "▶") +
                                      " ",
                                    1
                                  ))
                                : ((0, s.wg)(), (0, s.iD)("span", Ba, "  ")),
                              (0, s._)("span", Ha, (0, i.zw)(e), 1),
                              ja,
                              "string" === typeof n.thisObject[e]
                                ? ((0, s.wg)(),
                                  (0, s.iD)(
                                    "span",
                                    Na,
                                    '"' + (0, i.zw)(n.thisObject[e]) + '"',
                                    1
                                  ))
                                : "number" === typeof n.thisObject[e]
                                ? ((0, s.wg)(),
                                  (0, s.iD)(
                                    "span",
                                    za,
                                    (0, i.zw)(n.thisObject[e]),
                                    1
                                  ))
                                : "boolean" === typeof n.thisObject[e]
                                ? ((0, s.wg)(),
                                  (0, s.iD)(
                                    "span",
                                    Ea,
                                    (0, i.zw)(n.thisObject[e]),
                                    1
                                  ))
                                : r.isObject(n.thisObject[e])
                                ? ((0, s.wg)(),
                                  (0, s.iD)(
                                    s.HY,
                                    { key: 5 },
                                    [
                                      r.isArray(n.thisObject[e])
                                        ? ((0, s.wg)(),
                                          (0, s.iD)("span", Ua, "[…]"))
                                        : ((0, s.wg)(),
                                          (0, s.iD)("span", Ra, "{…}")),
                                      0 ===
                                      r.getListOfAllKeys(n.thisObject[e]).length
                                        ? ((0, s.wg)(),
                                          (0, s.iD)("span", Wa, " empty"))
                                        : r.isArray(n.thisObject[e])
                                        ? ((0, s.wg)(),
                                          (0, s.iD)(
                                            "span",
                                            qa,
                                            " " +
                                              (0, i.zw)(
                                                r.getListOfAllKeys(
                                                  n.thisObject[e]
                                                ).length
                                              ) +
                                              " items",
                                            1
                                          ))
                                        : (0, s.kq)("", !0),
                                    ],
                                    64
                                  ))
                                : (0, s.kq)("", !0),
                            ],
                            10,
                            Oa
                          ),
                          r.isObject(n.thisObject[e]) && o.keysOpened[e]
                            ? ((0, s.wg)(),
                              (0, s.j4)(
                                l,
                                {
                                  key: 0,
                                  thisObject: n.thisObject[e],
                                  level: n.level + 1,
                                },
                                null,
                                8,
                                ["thisObject", "level"]
                              ))
                            : (0, s.kq)("", !0),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]))
            : (0, s.kq)("", !0);
        }
        var Ga = {
          name: "object-viewer",
          props: ["thisObject", "level", "hideFunctions"],
          data() {
            return {
              opened: !0,
              keysOpened: {},
              restrictedKeys: ["parser", "p", "itemVarStore"],
              ready: !1,
            };
          },
          computed: {
            indent: function () {
              return this.createIndent(this.level);
            },
            keys: function () {
              let e = this.getListOfAllKeys(this.thisObject);
              return e;
            },
          },
          methods: {
            toggleKeyOpen(e) {
              this.keysOpened[e] = !this.keysOpened[e];
            },
            getListOfAllKeys(e) {
              let t = [];
              if (Array.isArray(e)) {
                for (let n in e) t.push(n);
                return t;
              }
              {
                Object.getPrototypeOf(e) &&
                  (t = Object.getOwnPropertyNames(Object.getPrototypeOf(e)));
                let n = Object.getOwnPropertyNames(e);
                return (
                  (n = this.arrayRemoveDuplicates(t.concat(n))),
                  (n = n.filter((e) => "_" !== e[0])),
                  (n = n.filter((e) => -1 === this.restrictedKeys.indexOf(e))),
                  (n = n.filter(
                    (e) => "function" !== typeof this.thisObject[e]
                  )),
                  n
                );
              }
            },
            arrayRemoveDuplicates(e) {
              let t = e.concat();
              for (let n = 0; n < t.length; ++n)
                for (let e = n + 1; e < t.length; ++e)
                  t[n] === t[e] && t.splice(e--, 1);
              return t;
            },
            isObject(e) {
              return "object" === typeof e;
            },
            isArray(e) {
              return Array.isArray(e);
            },
            isClass(e) {
              const t =
                e.constructor &&
                "class" === e.constructor.toString().substring(0, 5);
              if (void 0 === e.prototype) return t;
              const n =
                e.prototype.constructor &&
                e.prototype.constructor.toString &&
                "class" === e.prototype.constructor.toString().substring(0, 5);
              return t || n;
            },
            createIndent(e) {
              let t = "";
              for (var n = 0; n < e; n++) t += "  ";
              return t;
            },
          },
          created() {
            this.keysOpened = {};
            for (let e of this.keys) this.keysOpened[e] = !1;
            this.ready = !0;
          },
        };
        const Ka = (0, A.Z)(Ga, [
          ["render", Ya],
          ["__scopeId", "data-v-13c33570"],
        ]);
        var Za = Ka,
          Xa = {
            name: "font-panle-tab-source",
            title: "Font Source",
            padding: !1,
            fullHeight: !0,
            components: { ObjectViewer: Za },
            computed: {
              tables: function () {
                let e = {};
                for (let n of this.$store.getters.font.Font.opentype.directory)
                  try {
                    let t =
                      this.$store.getters.font.Font.opentype.tables[n["tag"]];
                    null != t && (e[n["tag"]] = t);
                  } catch (t) {
                    console.log(t);
                  }
                return e;
              },
            },
          };
        const Ja = (0, A.Z)(Xa, [
          ["render", Ia],
          ["__scopeId", "data-v-48d81dd5"],
        ]);
        var Qa = Ja;
        const es = { key: 0, class: "subtitle" },
          ts = { class: "us-t" };
        function ns(e, t, n, a, o, r) {
          return (
            (0, s.wg)(!0),
            (0, s.iD)(
              s.HY,
              null,
              (0, s.Ko)(
                r.sections,
                (e, t) => (
                  (0, s.wg)(),
                  (0, s.iD)("section", { key: t }, [
                    (0, s._)("h4", null, [
                      (0, s._)("strong", null, (0, i.zw)(e.title), 1),
                    ]),
                    ((0, s.wg)(!0),
                    (0, s.iD)(
                      s.HY,
                      null,
                      (0, s.Ko)(
                        e.items,
                        (e, t) => (
                          (0, s.wg)(),
                          (0, s.iD)(
                            "div",
                            {
                              key: t,
                              class: "item row flex rw jc-sb ai-c item",
                            },
                            [
                              (0, s._)("h5", null, [
                                (0, s.Uk)((0, i.zw)(e.name) + " ", 1),
                                e.subtitle
                                  ? ((0, s.wg)(),
                                    (0, s.iD)(
                                      "span",
                                      es,
                                      "(" + (0, i.zw)(e.subtitle) + ")",
                                      1
                                    ))
                                  : (0, s.kq)("", !0),
                              ]),
                              (0, s._)("p", ts, (0, i.zw)(e.value), 1),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ])
                )
              ),
              128
            )
          );
        }
        var as = {
          name: "font-panle-tab-info",
          title: "Font Info",
          computed: {
            sectionsData: function () {
              return [
                {
                  title: "General Font Info",
                  test: () =>
                    "name" in this.$store.getters.font.Font.opentype.tables,
                  items: [
                    {
                      name: "Font Family Name",
                      subtitle: "ID 1",
                      value:
                        this.$store.getters.font.Font.opentype.tables.name.get(
                          1
                        ),
                    },
                    {
                      name: "Font Subfamily Name",
                      subtitle: "ID 2",
                      value:
                        this.$store.getters.font.Font.opentype.tables.name.get(
                          2
                        ),
                    },
                    {
                      name: "Unique Font Identifier",
                      subtitle: "ID 3",
                      value:
                        this.$store.getters.font.Font.opentype.tables.name.get(
                          3
                        ),
                    },
                    {
                      name: "Full Font Name",
                      subtitle: "ID 4",
                      value:
                        this.$store.getters.font.Font.opentype.tables.name.get(
                          4
                        ),
                    },
                    {
                      name: "Version",
                      subtitle: "ID 5",
                      value:
                        this.$store.getters.font.Font.opentype.tables.name.get(
                          5
                        ),
                    },
                    {
                      name: "PostScript Name",
                      subtitle: "ID 6",
                      value:
                        this.$store.getters.font.Font.opentype.tables.name.get(
                          6
                        ),
                    },
                    {
                      name: "Typographic Family Name",
                      subtitle: "ID 16",
                      value:
                        this.$store.getters.font.Font.opentype.tables.name.get(
                          16
                        ),
                    },
                    {
                      name: "Typographic Subfamily Name",
                      subtitle: "ID 17",
                      value:
                        this.$store.getters.font.Font.opentype.tables.name.get(
                          17
                        ),
                    },
                    {
                      name: "Vendor ID",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .achVendID,
                    },
                  ],
                },
                {
                  title: "Metrics",
                  test: () =>
                    "OS/2" in this.$store.getters.font.Font.opentype.tables,
                  items: [
                    {
                      name: "Units per Em",
                      value:
                        this.$store.getters.font.Font.opentype.tables.head
                          .unitsPerEm,
                    },
                    {
                      name: "Cap Height",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .sCapHeight,
                    },
                    {
                      name: "x Height",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .sxHeight,
                    },
                    {
                      name: "typo Ascender",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .sTypoAscender,
                    },
                    {
                      name: "typo Descender",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .sTypoDescender,
                    },
                    {
                      name: "typo Line Gap",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .sTypoLineGap,
                    },
                    {
                      name: "hhea Ascender",
                      value:
                        this.$store.getters.font.Font.opentype.tables["hhea"]
                          .ascender,
                    },
                    {
                      name: "hhea Descender",
                      value:
                        this.$store.getters.font.Font.opentype.tables["hhea"]
                          .descender,
                    },
                    {
                      name: "hhea Line Gap",
                      value:
                        this.$store.getters.font.Font.opentype.tables["hhea"]
                          .lineGap,
                    },
                    {
                      name: "win Ascender",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .usWinAscent,
                    },
                    {
                      name: "win Descent",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .usWinDescent,
                    },
                  ],
                },
                {
                  title: "Miscellaneous",
                  test: () =>
                    "OS/2" in this.$store.getters.font.Font.opentype.tables,
                  items: [
                    {
                      name: "Number of Glyphs",
                      value:
                        this.$store.getters.font.Font.opentype.tables.maxp
                          .numGlyphs,
                    },
                    {
                      name: "Weight Class",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .usWeightClass,
                    },
                    {
                      name: "Width Class",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .usWidthClass,
                    },
                    {
                      name: "Italic Angle",
                      value:
                        this.$store.getters.font.Font.opentype.tables["post"]
                          .italicAngle,
                    },
                    {
                      name: "Underline Position",
                      value:
                        this.$store.getters.font.Font.opentype.tables["post"]
                          .underlinePosition,
                    },
                    {
                      name: "Underline Thickness",
                      value:
                        this.$store.getters.font.Font.opentype.tables["post"]
                          .underlineThickness,
                    },
                    {
                      name: "Strikeout Position",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .yStrikeoutPosition,
                    },
                    {
                      name: "Strikeout Size",
                      value:
                        this.$store.getters.font.Font.opentype.tables["OS/2"]
                          .yStrikeoutSize,
                    },
                  ],
                },
              ];
            },
            sections: function () {
              return this.sectionsData.filter((e) => e.test());
            },
          },
          mounted() {},
        };
        const ss = (0, A.Z)(as, [
          ["render", ns],
          ["__scopeId", "data-v-6db0f9ee"],
        ]);
        var is = ss,
          os = {
            name: "font",
            data() {
              return { tabs: [(0, ee.Xl)(is), (0, ee.Xl)(Qa)] };
            },
            components: { Panel: R },
          };
        const rs = (0, A.Z)(os, [["render", $a]]);
        var ls = rs,
          cs = { dashboard: (0, ee.Xl)(Ma), font: (0, ee.Xl)(ls) },
          us = {
            togglePanel(e, t) {
              null == e.panelName && (e.panel = null),
                null == e.panel ? (e.panel = cs[t]) : (e.panel = null);
            },
            setDashboardTab(e, t) {
              (e.panel = cs.dashboard), (e.dashboardTabName = t);
            },
          },
          ds = {
            togglePreferenceValue(e, t) {
              (e.preferences[t] = !e.preferences[t]), xt.savePreferences();
            },
            setPreferenceValue(e, t) {
              (e.preferences[t.name] = t.value), xt.savePreferences();
            },
          },
          ps = {
            setCurrentSession(e, t) {
              e.session = t;
            },
            closeSession(e) {
              e.session = null;
            },
          },
          gs = {
            setCurrentTab(e, t) {
              e.session.tab = t.id;
            },
            deleteTabByIndex(e, t) {
              e.session.tabs.splice(t, 1);
            },
            setTabDataValue(e, t) {
              null != this.getters.tab &&
                ((this.getters.tab.data[t.name] = t.value),
                this.dispatch("saveSession"));
            },
            setTabFgValue(e, t) {
              null != this.getters.tab &&
                "undefined" !== typeof t.value &&
                (this.getters.fg[t.name] = t.value);
            },
            setTabBgValue(e, t) {
              null != this.getters.tab &&
                "undefined" !== typeof t.value &&
                (this.getters.bg[t.name] = t.value);
            },
            toggleTabFontFeatureSettingsValue(e, t) {
              null != this.getters.tab &&
                (this.getters.fg.fontFeatureSettings.includes(t)
                  ? this.getters.fg.fontFeatureSettings.splice(
                      this.getters.fg.fontFeatureSettings.indexOf(t),
                      1
                    )
                  : this.getters.fg.fontFeatureSettings.push(t),
                this.dispatch("saveSession"));
            },
            deleteFontFromTab(e, t) {
              t.font.id in t.tab.fontData && delete t.tab.fontData[t.font.id],
                (t.tab.fonts = t.tab.fonts.filter((e) => e !== t.font.id)),
                (t.tab.selectedFonts = t.tab.selectedFonts.filter(
                  (e) => e !== t.font.id
                ));
            },
          },
          fs = {
            setUserMediaStream(e, t) {
              e.userMedia.stream = t;
            },
            setUserMediaAnalyser(e, t) {
              e.userMedia.analyser = t;
            },
            setUserMediaAxes(e, t) {
              e.userMedia.axes = t;
            },
            pushUserMediaAxes(e, t) {
              e.userMedia.axes.push(t);
            },
          },
          hs = {
            updateUserLastVersionUsed(e) {
              e.user.data.lastVersionUsed = e.config.VERSION;
            },
            updateUserLastBuildDateUsed(e) {
              e.user.data.lastBuildDateUsed = e.config.BUILD_DATE.getTime();
            },
            setUserNewVersionVisit(e) {
              e.user.newVersionVisit = gt.versionIsNewNoPatch(
                e.user.data.lastVersionUsed,
                e.config.VERSION
              );
            },
            setUserNewBuildVisit(e) {
              e.user.newBuildVisit = gt.buildIsNew(
                e.user.data.lastBuildDateUsed,
                e.config.BUILD_DATE.getTime()
              );
            },
          },
          ms = {
            ...gn,
            ...fn,
            ...hn,
            ...mn,
            ...us,
            ...ds,
            ...ps,
            ...gs,
            ...fs,
            ...hs,
          },
          bs = {
            id: gt.uid(),
            loaded: !1,
            fileSystemAccess: null != window.showOpenFilePicker,
          },
          vs = (0, ct.MT)({
            state: {
              config: pt,
              fonts: [],
              notifications: [],
              downloadingInstance: !1,
              instanceGenerationDisabled: !1,
              window: bs,
              sidebar: { open: !0, width: 260 },
              lastSessionExists: !1,
              session: null,
              user: { data: xt.getUser() },
              preferences: xt.getPreferences(),
              settings: { presentationMode: !1, mouseMode: !1 },
              defaults: {
                fontSize: { default: 150, min: 7, max: 800 },
                lineHeight: { default: 1, min: 0.7, max: 1.7 },
                letterSpacing: { default: 0, min: -100, max: 100 },
              },
              panel: null,
              dashboardTabName: "settings",
              fontPanelTabName: "info",
              currentTasks: {},
              userMedia: { stream: null, axes: [], analyser: null },
              notificationsShown: [],
              glyphsSearch: null,
              online: !0,
              standalone: window.matchMedia("(display-mode: standalone)")
                .matches,
              dev: "development" === pt.APP_ENV,
              server: !0,
            },
            actions: sn,
            getters: pn,
            mutations: ms,
          });
        function ws() {
          return {
            fontSize: 150,
            lineHeight: 1.05,
            letterSpacing: 0,
            textAlign: "left",
            textDecoration: "",
            textTransform: "",
            color: "#000000",
            direction: vs.state.preferences.defaultTextDirection || "ltr",
            fontFeatureSettings: [
              "calt",
              "liga",
              "rlig",
              "rvrn",
              "kern",
              "rclt",
            ],
            fontVariationSettings: "",
            centerMode: !1,
          };
        }
        var ys = {
          name: "text-properties",
          components: { InputRange: lt },
          data() {
            return {
              optionsTextAlignment: [
                { value: "left", text: "&#xf036;" },
                { value: "center", text: "&#xf037;" },
              ],
              optionsOtherProperties: [
                { value: "uppercase", text: "&#xf050;", type: "textTransform" },
                {
                  value: "capitalize",
                  text: "&#xf056;",
                  type: "textTransform",
                },
              ],
            };
          },
          computed: {
            tab: function () {
              return null != this.$store.state.session
                ? this.$store.getters.tab
                : { data: { autoSizeText: !1 } };
            },
            fg: function () {
              return null != this.$store.state.session
                ? this.$store.getters.fg
                : ws();
            },
          },
          methods: {
            updateFontSize(e) {
              this.$store.dispatch("updateTabFgValue", {
                name: "fontSize",
                value: e,
              }),
                this.$store.commit("setTabDataValue", {
                  name: "autoSizeText",
                  value: !1,
                });
            },
          },
        };
        const xs = (0, A.Z)(ys, [
          ["render", Ue],
          ["__scopeId", "data-v-541ec87d"],
        ]);
        var _s = xs;
        const Ss = { key: 0 },
          Ts = { key: 1, class: "features-list" },
          ks = ["onClick"],
          Fs = { key: 0, class: "icon active" },
          Cs = { key: 1, class: "icon" },
          Ds = { class: "name text-overflow-ellipsis" },
          As = { key: 2 };
        function Ms(e, t, n, a, o, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)("div", null, [
              null == e.$store.getters.font
                ? ((0, s.wg)(),
                  (0, s.iD)(
                    "span",
                    Ss,
                    "Your OpenType features will show up here"
                  ))
                : r.features.length > 0
                ? ((0, s.wg)(),
                  (0, s.iD)("div", Ts, [
                    ((0, s.wg)(!0),
                    (0, s.iD)(
                      s.HY,
                      null,
                      (0, s.Ko)(
                        r.features,
                        (t, n) => (
                          (0, s.wg)(),
                          (0, s.iD)(
                            "div",
                            {
                              key: n,
                              class: "features-list__row flex rw ai-c",
                              onClick: (n) =>
                                e.$store.commit(
                                  "toggleTabFontFeatureSettingsValue",
                                  t.tag
                                ),
                            },
                            [
                              r.isOpenTypeFeatureIncludedInTab(t)
                                ? ((0, s.wg)(), (0, s.iD)("span", Fs, " "))
                                : ((0, s.wg)(), (0, s.iD)("span", Cs, "")),
                              (0, s._)("span", Ds, " " + (0, i.zw)(t.name), 1),
                              (0, s._)(
                                "span",
                                {
                                  class: (0, i.C_)([
                                    "tag",
                                    { "tag--ss": t.tag.indexOf("ss") > -1 },
                                  ]),
                                },
                                (0, i.zw)(t.tag),
                                3
                              ),
                            ],
                            8,
                            ks
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : ((0, s.wg)(),
                  (0, s.iD)("span", As, "Your font has no OpenType features")),
            ])
          );
        }
        var $s = {
          name: "features",
          computed: {
            features: function () {
              let e = [],
                t = [];
              for (let n of this.$store.getters.fontFeatures)
                ["kern"].includes(n.tag) ||
                  (n.tag.indexOf("ss") > -1 ? e.push(n) : t.push(n));
              return (e = e.concat(t)), e;
            },
          },
          methods: {
            isOpenTypeFeatureIncludedInTab(e) {
              return (
                null != this.$store.getters.fg.fontFeatureSettings &&
                this.$store.getters.fg.fontFeatureSettings.includes(e.tag)
              );
            },
          },
        };
        const Is = (0, A.Z)($s, [
          ["render", Ms],
          ["__scopeId", "data-v-95ed8a6e"],
        ]);
        var Vs = Is;
        const Ps = { class: "font-info" },
          Os = (0, s.uE)(
            '<div class="font-info__logo" style="display:flex;flex-direction:row;align-items:center;"><a href="http://www.abcdinamo.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="13" viewBox="0 0 1060.37 168" style="display:block;margin-right:2px;"><g style="fill:red;"><path d="M976.8,124.6c-22.1,0-40.1-17.9-40.1-40.1c0-22.1,17.9-40.1,40.1-40.1c22.1,0,40.1,17.9,40.1,40.1\n                            c0,22.1-17.8,40-39.9,40.1C977,124.6,976.9,124.6,976.8,124.6 M976.8,1c-46.1,0-83.5,37.4-83.5,83.5s37.4,83.5,83.5,83.5\n                            c46.1,0,83.5-37.4,83.5-83.5C1060.3,38.4,1022.9,1,976.8,1 M812.5,1c-22.5,0.1-40.6,18.3-40.6,40.8v85.4c0,8.4-6.8,15.2-15.3,15.2\n                            c-8.4,0-15.2-6.8-15.2-15.2V41.8c0-22.5-18.2-40.7-40.7-40.7c-22.5,0-40.7,18.2-40.7,40.7c0,0,0,0,0,0V168h25.4V41.8\n                            c0-8.4,6.8-15.2,15.3-15.2c8.4,0,15.2,6.8,15.2,15.2v85.4c0,22.5,18.2,40.7,40.7,40.7c22.5,0,40.7-18.2,40.7-40.7c0,0,0,0,0,0\n                            V41.8c0-8.4,6.8-15.2,15.3-15.2c8.4,0,15.2,6.8,15.2,15.2V168h25.4V41.8C853.3,19.2,835,1,812.5,1C812.5,1,812.5,1,812.5,1\n                             M576.4,116.2c0,17.5-14.2,31.7-31.7,31.7S513,133.7,513,116.2s14.2-31.7,31.7-31.7l0,0C562.2,84.5,576.3,98.6,576.4,116.2\n                            C576.4,116.1,576.4,116.1,576.4,116.2 M544.7,0c-4.8-0.1-9.2,2.8-11,7.2L464.5,168h160.3L555.7,7C553.7,2.8,549.4,0,544.7,0\n                             M418.5,1v123.8c-0.5,13-11.5,23.1-24.5,22.5c-12.2-0.5-22-10.3-22.5-22.5V44.2c0-23.9-19.4-43.2-43.2-43.2\n                            c-23.8,0-43.2,19.3-43.2,43.2V168h19.7V44.2c0.5-13,11.5-23.1,24.5-22.5c12.2,0.5,22,10.3,22.5,22.5v80.6\n                            c0,23.9,19.4,43.2,43.2,43.2c23.8,0,43.2-19.3,43.2-43.2V1H418.5z M207.3,26.2c11.1,0.1,20,9.1,19.9,20.2c0,11-8.9,19.9-19.9,19.9\n                            s-19.9-8.9-19.9-19.9c0,0,0,0,0,0C187.4,35.3,196.3,26.2,207.3,26.2 M177.8,168h59V1h-59V168z M56.6,149h-7.4\n                            c-10.8,0-19.6-8.8-19.7-19.7V39.6C29.4,29,37.7,20.3,48.2,19.7h8.4c35.7,0,64.7,29,64.7,64.7S92.4,149,56.6,149 M56.6,1H0v167\n                            h56.6c46.1-1,82.7-39.2,81.7-85.3C137.3,38,101.3,2,56.6,1"></path></g></svg></a><h5 class="usn" style="color:blue;"> Font Gauntlet</h5></div>',
            1
          ),
          Ls = { class: "button-group", style: { "flex-wrap": "nowrap" } },
          Bs = { class: "flex rw ai-c", style: { overflow: "hidden" } },
          Hs = (0, s._)(
            "span",
            { class: "icon flash", style: { flex: "0 0 auto" } },
            " ",
            -1
          ),
          js = { class: "text-overflow-ellipsis", style: { flex: "1 1 auto" } },
          Ns = { key: 0, style: { opacity: "0.5", flex: "0 0 auto" } },
          zs = (0, s._)(
            "span",
            null,
            [(0, s.Uk)("  "), (0, s._)("span", { class: "icon" }, "🔎")],
            -1
          ),
          Es = (0, s._)("span", { class: "icon" }, "", -1),
          Us = [Es],
          Rs = {
            key: 1,
            class: "button",
            style: {
              flex: "1 1 auto",
              "text-align": "left",
              "justify-content": "space-between",
              overflow: "hidden",
            },
          },
          Ws = (0, s._)(
            "span",
            { style: { overflow: "hidden" } },
            [
              (0, s._)(
                "span",
                { class: "icon", style: { flex: "0 0 auto", color: "#bbb" } },
                " "
              ),
              (0, s._)(
                "span",
                {
                  class: "text-overflow-ellipsis",
                  style: { flex: "1 1 auto" },
                },
                "Open Your Font"
              ),
            ],
            -1
          );
        function qs(e, t, n, a, o, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)("div", Ps, [
              Os,
              (0, s._)("div", Ls, [
                e.$store.getters.font
                  ? ((0, s.wg)(),
                    (0, s.iD)(
                      s.HY,
                      { key: 0 },
                      [
                        (0, s._)(
                          "button",
                          {
                            class: "flex rw ai-c",
                            onClick:
                              t[0] ||
                              (t[0] = (t) =>
                                e.$store.commit("togglePanel", "font")),
                            style: {
                              flex: "1 1 auto",
                              "text-align": "left",
                              "justify-content": "space-between",
                              overflow: "hidden",
                            },
                          },
                          [
                            (0, s._)("span", Bs, [
                              Hs,
                              (0, s._)(
                                "span",
                                js,
                                (0, i.zw)(e.$store.getters.fullFontName),
                                1
                              ),
                              e.$store.getters.isFontVariable
                                ? ((0, s.wg)(), (0, s.iD)("span", Ns, " (VF)"))
                                : (0, s.kq)("", !0),
                            ]),
                            zs,
                          ]
                        ),
                        (0, s._)(
                          "button",
                          {
                            class: "button--square",
                            onClick:
                              t[1] ||
                              (t[1] = (t) => e.$store.dispatch("closeSession")),
                            style: { flex: "0 0 auto" },
                          },
                          Us
                        ),
                      ],
                      64
                    ))
                  : ((0, s.wg)(),
                    (0, s.iD)("label", Rs, [
                      Ws,
                      (0, s._)(
                        "input",
                        {
                          type: "file",
                          style: {
                            display: "none",
                            position: "fixed",
                            top: "-100em",
                          },
                          onChange:
                            t[2] ||
                            (t[2] = (t) =>
                              e.$store.dispatch("openFontFromFileEvent", t)),
                        },
                        null,
                        32
                      ),
                    ])),
              ]),
            ])
          );
        }
        var Ys = { name: "font-info" };
        const Gs = (0, A.Z)(Ys, [["render", qs]]);
        var Ks = Gs;
        const Zs = (e) => (
            (0, s.dD)("data-v-05cd92b0"), (e = e()), (0, s.Cn)(), e
          ),
          Xs = { key: 0, class: "variation-axis" },
          Js = {
            key: 0,
            class: "sidebar__sub-section all-axes section grid",
            style: { "grid-template-columns": "1fr 1fr 1fr auto" },
          },
          Qs = Zs(() => (0, s._)("span", { class: "icon s" }, "", -1)),
          ei = (0, s.Uk)(" Pause "),
          ti = Zs(() => (0, s._)("span", { class: "icon s" }, "", -1)),
          ni = (0, s.Uk)("  Play "),
          ai = Zs(() => (0, s._)("span", { class: "icon s" }, "", -1)),
          si = (0, s.Uk)("  Reset "),
          ii = [ai, si],
          oi = Zs(() => (0, s._)("span", { class: "icon s" }, "🎤", -1)),
          ri = (0, s.Uk)("  Audio "),
          li = [oi, ri],
          ci = Zs(() => (0, s._)("span", { class: "icon" }, "", -1)),
          ui = [ci],
          di = {
            class: "sidebar__sub-section instance",
            style: {
              "margin-bottom": "calc(var(--padding) * 0.75)",
              "margin-top": "calc(var(--padding) * 1.5)",
            },
          },
          pi = ["disabled"],
          gi = { key: 0 },
          fi = Zs(() =>
            (0, s._)(
              "span",
              { class: "dota" },
              [
                (0, s._)("span", null, "•"),
                (0, s._)("span", null, "•"),
                (0, s._)("span", null, "•"),
              ],
              -1
            )
          ),
          hi = [fi],
          mi = { class: "icon s" },
          bi = (0, s.Uk)(" Generate Static Font File");
        function vi(e, t, n, a, o, r) {
          const l = (0, s.up)("axes-axis");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", null, [
              r.fontAxes
                ? ((0, s.wg)(),
                  (0, s.iD)("div", Xs, [
                    Object.keys(r.fontAxes).length > 0
                      ? ((0, s.wg)(),
                        (0, s.iD)("div", Js, [
                          (0, s._)(
                            "button",
                            {
                              class: "button",
                              onClick:
                                t[0] ||
                                (t[0] = (t) =>
                                  e.$store.dispatch("toggleAllAxisAnimating")),
                            },
                            [
                              e.$store.getters.animating
                                ? ((0, s.wg)(),
                                  (0, s.iD)(s.HY, { key: 0 }, [Qs, ei], 64))
                                : ((0, s.wg)(),
                                  (0, s.iD)(s.HY, { key: 1 }, [ti, ni], 64)),
                            ]
                          ),
                          (0, s._)(
                            "button",
                            {
                              class: "button hit",
                              onClick:
                                t[1] ||
                                (t[1] = (t) =>
                                  e.$store.dispatch(
                                    "resetAllAxes",
                                    e.$store.state.font
                                  )),
                            },
                            ii
                          ),
                          (0, s._)(
                            "button",
                            {
                              class: (0, i.C_)([
                                "button",
                                {
                                  "cs--red": e.$store.getters.userMediaActive,
                                  glow: e.$store.getters.userMediaActive,
                                },
                              ]),
                              onClick:
                                t[2] ||
                                (t[2] = (t) =>
                                  e.$store.dispatch("toggleMicrophoneAll")),
                            },
                            li,
                            2
                          ),
                          (0, s._)(
                            "button",
                            {
                              class: (0, i.C_)([
                                "button square",
                                {
                                  "cs--red": e.$store.state.settings.mouseMode,
                                  glow: e.$store.state.settings.mouseMode,
                                },
                              ]),
                              onClick:
                                t[3] ||
                                (t[3] = (t) =>
                                  e.$store.dispatch("toggleMouseMode")),
                            },
                            ui,
                            2
                          ),
                        ]))
                      : (0, s.kq)("", !0),
                    Object.keys(r.fontAxes).length > 0
                      ? ((0, s.wg)(!0),
                        (0, s.iD)(
                          s.HY,
                          { key: 1 },
                          (0, s.Ko)(
                            r.fontAxes,
                            (e, t) => (
                              (0, s.wg)(),
                              (0, s.iD)(
                                "div",
                                {
                                  class: "sidebar__sub-section section",
                                  key: t,
                                },
                                [
                                  (0, s.Wm)(
                                    l,
                                    {
                                      axis: e,
                                      axisTag: t,
                                      mic: o.mediaStreamAxes.includes(t),
                                    },
                                    null,
                                    8,
                                    ["axis", "axisTag", "mic"]
                                  ),
                                ]
                              )
                            )
                          ),
                          128
                        ))
                      : (0, s.kq)("", !0),
                    (0, s._)("div", di, [
                      (0, s._)(
                        "button",
                        {
                          class: (0, i.C_)([
                            "instance__button",
                            { generating: e.$store.state.downloadingInstance },
                          ]),
                          onClick:
                            t[4] ||
                            (t[4] = (t) =>
                              e.$store.dispatch("downloadCurrentInstance")),
                          disabled:
                            !e.$store.state.online ||
                            e.$store.state.instanceGenerationDisabled,
                        },
                        [
                          e.$store.state.downloadingInstance
                            ? ((0, s.wg)(), (0, s.iD)("span", gi, hi))
                            : ((0, s.wg)(),
                              (0, s.iD)(
                                s.HY,
                                { key: 1 },
                                [
                                  (0, s._)(
                                    "span",
                                    mi,
                                    (0, i.zw)(
                                      e.$store.state.online ? "" : ""
                                    ),
                                    1
                                  ),
                                  bi,
                                ],
                                64
                              )),
                        ],
                        10,
                        pi
                      ),
                    ]),
                  ]))
                : (0, s.kq)("", !0),
            ])
          );
        }
        const wi = { class: "variation-axis__control" },
          yi = { class: "flex rw jc-sb ai-c" },
          xi = {
            style: {
              flex: "1 1 auto",
              "text-overflow": "ellipsis",
              overflow: "hidden",
              "white-space": "nowrap",
            },
          },
          _i = { class: "flex rw", style: { "padding-bottom": "2px" } },
          Si = { class: "text-overflow-ellipsis" },
          Ti = {
            class: "variation-axis__control__tag",
            style: { opacity: "50%" },
          },
          ki = { class: "button-group", style: { flex: "0 0 auto" } },
          Fi = (0, s._)("span", { class: "icon" }, "", -1),
          Ci = ["value", "selected"],
          Di = (0, s._)("span", { class: "icon xl" }, "🎤", -1),
          Ai = [Di],
          Mi = { class: "flex jc-sb ai-c" },
          $i = { key: 0, class: "icon" },
          Ii = { key: 1, class: "icon" },
          Vi = { style: { flex: "1 1 100%", "padding-left": "4px" } };
        function Pi(e, t, n, a, o, r) {
          const l = (0, s.up)("input-range");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", wi, [
              (0, s._)("div", yi, [
                (0, s._)("div", xi, [
                  (0, s._)("div", _i, [
                    (0, s._)("span", Si, (0, i.zw)(n.axis.name), 1),
                    (0, s._)(
                      "span",
                      Ti,
                      " (" + (0, i.zw)(n.axisTag) + ")  ",
                      1
                    ),
                  ]),
                ]),
                (0, s._)("div", ki, [
                  (0, s._)(
                    "label",
                    {
                      class: (0, i.C_)([
                        "c-select c-select--square",
                        { disabled: e.$store.getters.axesInteractionActive },
                      ]),
                    },
                    [
                      Fi,
                      (0, s._)(
                        "select",
                        {
                          onChange:
                            t[0] ||
                            (t[0] = (t) =>
                              e.$store.commit("setAxisEasing", {
                                axisTag: n.axisTag,
                                easing: t.target.selectedOptions[0].value,
                              })),
                        },
                        [
                          ((0, s.wg)(!0),
                          (0, s.iD)(
                            s.HY,
                            null,
                            (0, s.Ko)(
                              o.easingFunctions,
                              (e, t) => (
                                (0, s.wg)(),
                                (0, s.iD)(
                                  "option",
                                  {
                                    key: t,
                                    value: t,
                                    selected: t === r.easing,
                                  },
                                  (0, i.zw)(e.title),
                                  9,
                                  Ci
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        32
                      ),
                    ],
                    2
                  ),
                  (0, s._)(
                    "button",
                    {
                      class: (0, i.C_)([
                        "button",
                        { disabled: e.$store.getters.axesInteractionActive },
                      ]),
                      onClick:
                        t[1] ||
                        (t[1] = (t) =>
                          e.$store.dispatch("toggleAxisSpeed", n.axisTag)),
                    },
                    " ×" + (0, i.zw)(r.speed.toFixed(1)),
                    3
                  ),
                  (0, s._)(
                    "button",
                    {
                      class: (0, i.C_)([
                        "button button--square",
                        {
                          "cs--red":
                            e.$store.getters.userMediaActive &&
                            e.$store.state.userMedia.axes.includes(n.axisTag),
                          glow:
                            e.$store.getters.userMediaActive &&
                            e.$store.state.userMedia.axes.includes(n.axisTag),
                        },
                      ]),
                      onClick:
                        t[2] ||
                        (t[2] = (t) =>
                          e.$store.dispatch("toggleAxisMic", n.axis)),
                    },
                    Ai,
                    2
                  ),
                ]),
              ]),
              (0, s._)("div", Mi, [
                (0, s._)(
                  "button",
                  {
                    class: "button button--square",
                    onClick:
                      t[3] ||
                      (t[3] = (t) =>
                        e.$store.dispatch("toggleAnimateAxis", n.axisTag)),
                  },
                  [
                    r.animating
                      ? ((0, s.wg)(), (0, s.iD)("span", $i, ""))
                      : ((0, s.wg)(), (0, s.iD)("span", Ii, "")),
                  ]
                ),
                (0, s._)("div", Vi, [
                  (0, s.Wm)(
                    l,
                    {
                      min: r.minDefault,
                      max: r.maxDefault,
                      value: r.value,
                      crop: !0,
                      step: null,
                      decimals: r.getAxisDecimalPlaces(n.axis),
                      minCrop: r.cropMin,
                      maxCrop: r.cropMax,
                      onValueChange:
                        t[4] ||
                        (t[4] = (t) =>
                          e.$store.dispatch("updateAxisValueFromSlider", {
                            axis: n.axis,
                            value: t,
                          })),
                      onMinChange:
                        t[5] ||
                        (t[5] = (t) =>
                          e.$store.commit("setAxisMin", {
                            axisTag: n.axisTag,
                            value: t,
                          })),
                      onMaxChange:
                        t[6] ||
                        (t[6] = (t) =>
                          e.$store.commit("setAxisMax", {
                            axisTag: n.axisTag,
                            value: t,
                          })),
                    },
                    null,
                    8,
                    ["min", "max", "value", "decimals", "minCrop", "maxCrop"]
                  ),
                ]),
              ]),
            ])
          );
        }
        var Oi = {
          name: "axes-axis",
          props: ["axisTag", "axis", "mic"],
          data() {
            return { animationSpeeds: Tt, easingFunctions: kt };
          },
          components: { InputRange: lt },
          computed: {
            FontAxis: function () {
              return this.$store.getters.font.axes[this.axisTag] || {};
            },
            easing: function () {
              return this.axis.easing || "none";
            },
            animating: function () {
              return this.axis.animating || !1;
            },
            speed: function () {
              return null != this.axis.speed ? this.axis.speed : 1;
            },
            value: function () {
              return null != this.axis.value
                ? this.axis.value
                : this.FontAxis.defaultValue;
            },
            minDefault: function () {
              return null != this.axis.minDefault
                ? this.axis.minDefault
                : this.FontAxis.minDefault;
            },
            maxDefault: function () {
              return null != this.axis.maxDefault
                ? this.axis.maxDefault
                : this.FontAxis.maxDefault;
            },
            cropMin: function () {
              return null != this.axis.min
                ? this.axis.min
                : this.FontAxis.minDefault;
            },
            cropMax: function () {
              return null != this.axis.max
                ? this.axis.max
                : this.FontAxis.maxDefault;
            },
          },
          methods: {
            getAxisDecimalPlaces(e) {
              let t = e.maxDefault - e.minDefault;
              return t < 10 ? 2 : t < 20 ? 1 : 0;
            },
          },
        };
        const Li = (0, A.Z)(Oi, [["render", Pi]]);
        var Bi = Li,
          Hi = {
            name: "axes",
            data() {
              return {
                currentlyAnimating: !1,
                animationSpeeds: Tt,
                easingFunctions: kt,
                mediaStreamAxes: [],
                mediaStream: null,
              };
            },
            components: { AxesAxis: Bi },
            computed: {
              fontAxes: function () {
                return this.$store.state.preferences.showHiddenFontAxes
                  ? this.$store.getters.axes
                  : Object.fromEntries(
                      Object.entries(this.$store.getters.axes).filter(
                        ([e, t]) => !t.hidden
                      )
                    );
              },
            },
            methods: {
              formatAxisValue(e) {
                return e % 1 === 0 ? parseInt(e) : e.toFixed(2);
              },
              getAxisDecimalPlaces(e) {
                let t = e.maxValue - e.minValue;
                return t < 10 ? 2 : t < 20 ? 1 : 0;
              },
            },
          };
        const ji = (0, A.Z)(Hi, [
          ["render", vi],
          ["__scopeId", "data-v-05cd92b0"],
        ]);
        var Ni = ji;
        const zi = { key: 0, class: "sidebar__sub-section-wrapper" },
          Ei = {
            class: "c-select",
            style: {
              width: "100%",
              display: "flex",
              "justify-content": "space-between",
            },
          },
          Ui = { key: 0, class: "text-overflow-ellipsis" },
          Ri = { key: 1, class: "text-overflow-ellipsis" },
          Wi = (0, s._)(
            "option",
            {
              value: 1e4,
              disabled: "",
              selected: "",
              style: { display: "none" },
            },
            "Current Position",
            -1
          ),
          qi = ["value"],
          Yi = (0, s._)("span", { class: "icon small" }, "▼", -1);
        function Gi(e, t, n, a, o, r) {
          return e.$store.getters.isFontVariable &&
            r.instances &&
            r.instances.length > 0
            ? ((0, s.wg)(),
              (0, s.iD)("div", zi, [
                (0, s._)("label", Ei, [
                  null != r.currentInstance
                    ? ((0, s.wg)(),
                      (0, s.iD)(
                        "span",
                        Ui,
                        "Current: " + (0, i.zw)(r.currentInstance.name),
                        1
                      ))
                    : ((0, s.wg)(), (0, s.iD)("span", Ri, "Select Style")),
                  (0, s._)(
                    "select",
                    {
                      onChange:
                        t[0] ||
                        (t[0] = (...e) => r.onChange && r.onChange(...e)),
                    },
                    [
                      Wi,
                      ((0, s.wg)(!0),
                      (0, s.iD)(
                        s.HY,
                        null,
                        (0, s.Ko)(
                          r.instances,
                          (e, t) => (
                            (0, s.wg)(),
                            (0, s.iD)(
                              "option",
                              { key: t, value: t },
                              (0, i.zw)(e.name),
                              9,
                              qi
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    32
                  ),
                  Yi,
                ]),
              ]))
            : (0, s.kq)("", !0);
        }
        var Ki = {
          name: "instances",
          computed: {
            instances: function () {
              return this.$store.getters.instances;
            },
            currentInstance: function () {
              return this.$store.getters
                .doesCurrentAxesPositionsMatchAnInstance;
            },
          },
          methods: {
            downloadInstance(e) {
              this.$store.dispatch("downloadInstance", e);
            },
            onChange(e) {
              this.switchToInstance(e.target.selectedOptions[0].value),
                (e.target.value = 1e4);
            },
            switchToInstance(e) {
              this.$store.dispatch(
                "switchToInstance",
                this.$store.getters.instances[e]
              );
            },
          },
        };
        const Zi = (0, A.Z)(Ki, [["render", Gi]]);
        var Xi = Zi;
        const Ji = (e) => (
            (0, s.dD)("data-v-6f47f990"), (e = e()), (0, s.Cn)(), e
          ),
          Qi = {
            class: "button-pod",
            style: {
              width: "100%",
              display: "flex",
              "flex-direction": "row",
              "margin-bottom": "var(--padding)",
            },
          },
          eo = Ji(() => (0, s._)("span", { class: "icon" }, "", -1)),
          to = [eo],
          no = { id: "picker-wrapper" },
          ao = Ji(() => (0, s._)("div", { id: "picker" }, null, -1)),
          so = { class: "picker-code flex rw ai-c" },
          io = Ji(() => (0, s._)("span", null, "R", -1)),
          oo = ["value"],
          ro = Ji(() => (0, s._)("span", null, "G", -1)),
          lo = ["value"],
          co = Ji(() => (0, s._)("span", null, "B", -1)),
          uo = ["value"],
          po = Ji(() => (0, s._)("span", null, "HEX", -1));
        function go(e, t, n, o, r, l) {
          return (
            (0, s.wg)(),
            (0, s.iD)("div", null, [
              (0, s._)("div", Qi, [
                (0, s._)(
                  "button",
                  {
                    class: (0, i.C_)([
                      "button",
                      { active: "fg" == r.currentColorLayer },
                    ]),
                    style: { flex: "1 1 50%" },
                    onClick: t[0] || (t[0] = (e) => l.switchColorLayer("fg")),
                  },
                  " Foreground ",
                  2
                ),
                (0, s._)(
                  "button",
                  {
                    class: "button--square",
                    style: { flex: "0 0 auto", "background-color": "#cccccc" },
                    onClick:
                      t[1] ||
                      (t[1] = (...e) =>
                        l.switchBodyTextColors && l.switchBodyTextColors(...e)),
                  },
                  to
                ),
                (0, s._)(
                  "button",
                  {
                    class: (0, i.C_)([
                      "button",
                      { active: "bg" == r.currentColorLayer },
                    ]),
                    style: { flex: "1 1 50%" },
                    onClick: t[2] || (t[2] = (e) => l.switchColorLayer("bg")),
                  },
                  " Background ",
                  2
                ),
              ]),
              (0, s._)("div", no, [
                ao,
                (0, s._)("div", so, [
                  null != r.color
                    ? ((0, s.wg)(),
                      (0, s.iD)(
                        s.HY,
                        { key: 0 },
                        [
                          "rgb" === r.colorMode
                            ? ((0, s.wg)(),
                              (0, s.iD)(
                                s.HY,
                                { key: 0 },
                                [
                                  io,
                                  (0, s._)(
                                    "input",
                                    {
                                      type: "text",
                                      value: r.color.red,
                                      onInput:
                                        t[3] ||
                                        (t[3] = (e) =>
                                          l.updateChannelValue(
                                            "red",
                                            e.target.value
                                          )),
                                    },
                                    null,
                                    40,
                                    oo
                                  ),
                                  ro,
                                  (0, s._)(
                                    "input",
                                    {
                                      type: "text",
                                      value: r.color.green,
                                      onInput:
                                        t[4] ||
                                        (t[4] = (e) =>
                                          l.updateChannelValue(
                                            "green",
                                            e.target.value
                                          )),
                                    },
                                    null,
                                    40,
                                    lo
                                  ),
                                  co,
                                  (0, s._)(
                                    "input",
                                    {
                                      type: "text",
                                      value: r.color.blue,
                                      onInput:
                                        t[5] ||
                                        (t[5] = (e) =>
                                          l.updateChannelValue(
                                            "blue",
                                            e.target.value
                                          )),
                                    },
                                    null,
                                    40,
                                    uo
                                  ),
                                ],
                                64
                              ))
                            : "hex" === r.colorMode
                            ? ((0, s.wg)(),
                              (0, s.iD)(
                                s.HY,
                                { key: 1 },
                                [
                                  po,
                                  (0, s.wy)(
                                    (0, s._)(
                                      "input",
                                      {
                                        type: "text",
                                        "onUpdate:modelValue":
                                          t[6] ||
                                          (t[6] = (e) => (r.hexString = e)),
                                        onBlur:
                                          t[7] ||
                                          (t[7] = (e) =>
                                            (r.hexString = r.color.hexString)),
                                        onInput:
                                          t[8] ||
                                          (t[8] = (e) =>
                                            l.updateHexValue(e.target.value)),
                                      },
                                      null,
                                      544
                                    ),
                                    [[a.nr, r.hexString]]
                                  ),
                                ],
                                64
                              ))
                            : (0, s.kq)("", !0),
                          (0, s._)(
                            "button",
                            {
                              class: "plain icon circle-hover",
                              onClick:
                                t[9] ||
                                (t[9] = (...e) =>
                                  l.toggleColorMode && l.toggleColorMode(...e)),
                            },
                            ""
                          ),
                        ],
                        64
                      ))
                    : (0, s.kq)("", !0),
                ]),
              ]),
            ])
          );
        }
        var fo = n(7853),
          ho = {
            name: "text-style",
            data() {
              return {
                picker: null,
                currentColorLayer: "fg",
                colorMode: "hex",
                color: null,
                hexString: "",
              };
            },
            computed: {
              tab: function () {
                return this.$store.getters.tab;
              },
              fgColor: function () {
                return null == this.$store.state.session
                  ? "#000"
                  : this.$store.getters.fg.color;
              },
              bgColor: function () {
                return null == this.$store.state.session
                  ? "#fff"
                  : this.$store.getters.bg.backgroundColor;
              },
            },
            watch: {
              fgColor: function (e) {
                "fg" === this.currentColorLayer && this.updatePickerColor(e);
              },
              bgColor: function (e) {
                "bg" === this.currentColorLayer && this.updatePickerColor(e);
              },
            },
            methods: {
              switchColorLayer(e) {
                e !== this.currentColorLayer &&
                  ((this.currentColorLayer = e), this.setCurrentColor());
              },
              setCurrentColor() {
                "fg" === this.currentColorLayer
                  ? this.updatePickerColor(this.fgColor)
                  : "bg" === this.currentColorLayer &&
                    this.updatePickerColor(this.bgColor);
              },
              handleColorChange(e) {
                "fg" === this.currentColorLayer
                  ? this.$store.dispatch("updateTabFgValue", {
                      name: "color",
                      value: e.rgbaString,
                    })
                  : "bg" === this.currentColorLayer &&
                    this.$store.dispatch("updateTabBgValue", {
                      name: "backgroundColor",
                      value: e.rgbaString,
                    }),
                  (this.red = this.picker);
              },
              updatePickerColor(e) {
                (this.color = new fo.Z.Color(e)),
                  ("" != this.hexString &&
                    new fo.Z.Color(this.hexString).hexString ===
                      this.color.hexString) ||
                    (this.hexString = this.color.hexString),
                  this.color.rgbaString !== this.picker.color.rgbaString &&
                    (this.picker.color.rgbaString = this.color.rgbaString);
              },
              switchBodyTextColors() {
                this.$store.dispatch("switchBodyTextColors"),
                  this.setCurrentColor();
              },
              updateChannelValue(e, t) {
                (t = parseInt(t)), isNaN(t) || (this.picker.color[e] = t);
              },
              updateHexValue(e) {
                try {
                  this.picker.color.hexString = e;
                } catch (t) {
                  return;
                }
              },
              toggleColorMode() {
                this.colorMode = "rgb" === this.colorMode ? "hex" : "rgb";
              },
            },
            mounted() {
              let e = document.getElementById("picker-wrapper");
              if (null == e) return;
              let t = e.offsetWidth;
              (this.picker = new fo.Z.ColorPicker("#picker", {
                width: t,
                margin: 10,
                handleRadius: 9,
                padding: 4,
                boxHeight: 0.4 * t,
                layout: [
                  { component: fo.Z.ui.Box, options: { boxHeight: 0.4 * t } },
                  { component: fo.Z.ui.Slider, options: { sliderType: "hue" } },
                ],
              })),
                this.picker.on("color:change", this.handleColorChange),
                this.setCurrentColor();
            },
          };
        const mo = (0, A.Z)(ho, [
          ["render", go],
          ["__scopeId", "data-v-6f47f990"],
        ]);
        var bo = mo,
          vo = [
            {
              type: "single",
              component: (0, ee.Xl)(Ks),
              style: { flex: "0 0 auto" },
            },
            {
              type: "single",
              component: (0, ee.Xl)(_s),
              style: { flex: "0 0 auto" },
            },
            {
              tabs: [
                { title: "Sample Text", component: (0, ee.Xl)(pe) },
                { title: "Glyph Sets", component: (0, ee.Xl)(ve) },
              ],
              style: { flex: "0 0 auto" },
            },
            {
              variableSection: !0,
              disabled: ["style-range"],
              tabs: [{ title: "Variable Axes", component: (0, ee.Xl)(Ni) }],
            },
            {
              variableSection: !0,
              tabs: [{ title: "Preset Styles", component: (0, ee.Xl)(Xi) }],
            },
            { tabs: [{ title: "Color", component: (0, ee.Xl)(bo) }] },
            {
              tabs: [{ title: "OpenType Features", component: (0, ee.Xl)(Vs) }],
            },
          ];
        const wo = { key: 1, class: "sidebar__section__inner" },
          yo = { key: 2, class: "sidebar__section__inner" };
        function xo(e, t, n, a, o, r) {
          const l = (0, s.up)("sidebar-tabs");
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "div",
              {
                class: (0, i.C_)([
                  "sidebar__section",
                  {
                    "sidebar__section--tabs": n.section.tabs,
                    "sidebar__section--disabled": r.isSectionDisabled(),
                  },
                ]),
                style: (0, i.j5)(n.section.style),
              },
              [
                n.section.tabs
                  ? ((0, s.wg)(),
                    (0, s.j4)(
                      l,
                      {
                        key: 0,
                        tabs: n.section.tabs,
                        currentTab: o.currentTab,
                        onUpdate: r.handleTabClick,
                      },
                      null,
                      8,
                      ["tabs", "currentTab", "onUpdate"]
                    ))
                  : (0, s.kq)("", !0),
                n.section.tabs
                  ? ((0, s.wg)(),
                    (0, s.iD)("div", wo, [
                      ((0, s.wg)(),
                      (0, s.j4)((0, s.LL)(o.currentTab.component))),
                    ]))
                  : (0, s.kq)("", !0),
                null == n.section.tabs
                  ? ((0, s.wg)(),
                    (0, s.iD)("div", yo, [
                      ((0, s.wg)(), (0, s.j4)((0, s.LL)(n.section.component))),
                    ]))
                  : (0, s.kq)("", !0),
              ],
              6
            )
          );
        }
        const _o = { class: "tabs-buttons flex rw" },
          So = ["onClick"];
        function To(e, t, n, a, o, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)("div", _o, [
              ((0, s.wg)(!0),
              (0, s.iD)(
                s.HY,
                null,
                (0, s.Ko)(
                  n.tabs,
                  (t, a) => (
                    (0, s.wg)(),
                    (0, s.iD)(
                      "button",
                      {
                        class: (0, i.C_)([
                          "tab__button",
                          {
                            "tab__button--open": t.title === n.currentTab.title,
                          },
                        ]),
                        key: a,
                        onClick: () => e.$emit("update", t),
                      },
                      (0, i.zw)(t.title) + "    ",
                      11,
                      So
                    )
                  )
                ),
                128
              )),
            ])
          );
        }
        var ko = { name: "sidebar-tabs", props: ["tabs", "currentTab"] };
        const Fo = (0, A.Z)(ko, [
          ["render", To],
          ["__scopeId", "data-v-45bafe20"],
        ]);
        var Co = Fo,
          Do = {
            name: "sidebar-section",
            props: ["section"],
            components: { SidebarTabs: Co },
            data() {
              return {
                currentTab: this.section.tabs ? this.section.tabs[0] : null,
              };
            },
            methods: {
              handleTabClick(e) {
                this.currentTab = e;
              },
              isSectionDisabled() {
                return (
                  null != this.$store.getters.tab &&
                  null != this.section.disabled &&
                  this.section.disabled.includes(
                    this.$store.getters.tab.viewMode
                  )
                );
              },
            },
          };
        const Ao = (0, A.Z)(Do, [
          ["render", xo],
          ["__scopeId", "data-v-3c52b55e"],
        ]);
        var Mo = Ao;
        const $o = (e) => (
            (0, s.dD)("data-v-485c4bea"), (e = e()), (0, s.Cn)(), e
          ),
          Io = {
            class: "sidebar-bar bar blur",
            style: {
              display: "flex",
              "flex-direction": "row",
              "justify-content": "space-between",
            },
          },
          Vo = {
            class: "button-group",
            style: { flex: "1 1 auto", "justify-content": "flex-end" },
          },
          Po = $o(() => (0, s._)("span", { class: "icon" }, "ℹ", -1)),
          Oo = [Po],
          Lo = $o(() => (0, s._)("span", { class: "icon" }, "", -1)),
          Bo = [Lo];
        function Ho(e, t, n, i, o, r) {
          return (0, s.wy)(
            ((0, s.wg)(),
            (0, s.iD)(
              "div",
              Io,
              [
                (0, s._)("div", Vo, [
                  (0, s._)(
                    "button",
                    {
                      class: "button--square",
                      onClick:
                        t[0] ||
                        (t[0] = (t) =>
                          e.$store.commit("setDashboardTab", "info")),
                    },
                    Oo
                  ),
                  (0, s._)(
                    "button",
                    {
                      class: "button--square",
                      style: { "margin-right": "0" },
                      onClick:
                        t[1] ||
                        (t[1] = (t) =>
                          e.$store.commit("setDashboardTab", "settings")),
                    },
                    Bo
                  ),
                ]),
              ],
              512
            )),
            [[a.F8, !e.$store.state.settings.presentationMode]]
          );
        }
        var jo = {
          name: "sidebar-bar",
          computed: {
            version: function () {
              return gt.formatVersionShort(this.$store.state.config.VERSION);
            },
          },
        };
        const No = (0, A.Z)(jo, [
          ["render", Ho],
          ["__scopeId", "data-v-485c4bea"],
        ]);
        var zo = No,
          Eo = {
            name: "app-sidebar",
            components: { SidebarBar: zo, SidebarSection: Mo },
            data() {
              return { sidebarSections: vo };
            },
            computed: {
              open: function () {
                return (
                  0 != this.$store.state.sidebar.open &&
                  !this.$store.state.settings.presentationMode
                );
              },
              sidebarCSS: function () {
                return {
                  flex: `0 0 ${
                    this.open ? this.$store.state.sidebar.width : 0
                  }px`,
                  maxWidth: `${this.$store.state.sidebar.width}px`,
                };
              },
            },
            methods: {
              showSection(e) {
                return (
                  0 != e.show &&
                  (1 != e.variableSection ||
                    0 != this.$store.getters.isFontVariable)
                );
              },
              handleSidebarToggle() {
                this.$store.state.settings.presentationMode
                  ? this.$store.dispatch("togglePresentationMode")
                  : this.$store.dispatch("toggleSidebar");
              },
            },
          };
        const Uo = (0, A.Z)(Eo, [
          ["render", Q],
          ["__scopeId", "data-v-cf309866"],
        ]);
        var Ro = Uo;
        const Wo = { class: "tab-view" },
          qo = { class: "tab-view__view" };
        function Yo(e, t, n, a, i, o) {
          const r = (0, s.up)("tab-view-bar"),
            l = (0, s.up)("start-view");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", Wo, [
              e.$store.getters.font
                ? ((0, s.wg)(),
                  (0, s.j4)(
                    r,
                    {
                      key: 0,
                      tabs: n.tabs,
                      onUpdateAdditional: o.updateAdditional,
                      onTabsUpdate: o.tabsUpdate,
                      onCloseTab: o.closeTab,
                      tabTypes: i.tabTypes,
                    },
                    null,
                    8,
                    [
                      "tabs",
                      "onUpdateAdditional",
                      "onTabsUpdate",
                      "onCloseTab",
                      "tabTypes",
                    ]
                  ))
                : (0, s.kq)("", !0),
              (0, s._)("div", qo, [
                e.$store.getters.font
                  ? ((0, s.wg)(),
                    (0, s.j4)(
                      (0, s.LL)(o.tabComponent),
                      { tab: o.tab, data: o.tab.data, key: o.tab.id },
                      null,
                      8,
                      ["tab", "data"]
                    ))
                  : ((0, s.wg)(), (0, s.j4)(l, { key: 1 })),
              ]),
            ])
          );
        }
        const Go = { class: "view" };
        function Ko(e, t, n, a, i, o) {
          return (0, s.wg)(), (0, s.iD)("div", Go);
        }
        var Zo = { name: "view", props: [] };
        const Xo = (0, A.Z)(Zo, [["render", Ko]]);
        var Jo = Xo;
        const Qo = (e) => (
            (0, s.dD)("data-v-68d80400"), (e = e()), (0, s.Cn)(), e
          ),
          er = { class: "tab-view-bar flex rw" },
          tr = (0, s.Uk)("   "),
          nr = ["onClick", "innerHTML"],
          ar = ["onClick"],
          sr = { key: 0, class: "icon text-color" },
          ir = Qo(() => (0, s._)("span", { class: "icon" }, "➕", -1)),
          or = [ir];
        function rr(e, t, n, o, r, l) {
          return (0, s.wy)(
            ((0, s.wg)(),
            (0, s.iD)(
              "div",
              er,
              [
                (0, s.Wm)(
                  a.W3,
                  {
                    name: "tab-button",
                    tag: "div",
                    class: "tab-view-bar__tabs flex rw nwr",
                  },
                  {
                    default: (0, s.w5)(() => [
                      ((0, s.wg)(!0),
                      (0, s.iD)(
                        s.HY,
                        null,
                        (0, s.Ko)(
                          n.tabs,
                          (t, n) => (
                            (0, s.wg)(),
                            (0, s.iD)(
                              "div",
                              {
                                class: (0, i.C_)([
                                  "tab-view-bar__button",
                                  {
                                    "tab-view-bar__button--open":
                                      t.id === e.$store.getters.tab.id,
                                  },
                                ]),
                                key: n,
                                appear: "",
                              },
                              [
                                tr,
                                (0, s._)(
                                  "div",
                                  {
                                    class:
                                      "tab-view-bar__button__inner text-overflow-ellipsis",
                                    onClick: () => l.handleTabClick(t),
                                    innerHTML: l.getTabTitle(t),
                                  },
                                  null,
                                  8,
                                  nr
                                ),
                                (0, s._)(
                                  "div",
                                  {
                                    class: "tab-view-bar__button__close",
                                    onClick: () => l.closeTab(n),
                                  },
                                  [
                                    Object.keys(r.additionalAllowed).includes(
                                      t.type
                                    )
                                      ? ((0, s.wg)(),
                                        (0, s.iD)("span", sr, " "))
                                      : (0, s.kq)("", !0),
                                  ],
                                  8,
                                  ar
                                ),
                              ],
                              2
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                ),
                Object.keys(r.additionalAllowed).length > 0
                  ? ((0, s.wg)(),
                    (0, s.iD)(
                      "div",
                      {
                        key: 0,
                        class:
                          "tab-view-bar__button tab-view-bar__button--additional",
                        onClick:
                          t[0] ||
                          (t[0] = () =>
                            l.handleAdditionalTabClick(
                              Object.keys(r.additionalAllowed)[0]
                            )),
                      },
                      or
                    ))
                  : (0, s.kq)("", !0),
              ],
              512
            )),
            [[a.F8, !e.$store.state.settings.presentationMode]]
          );
        }
        var lr = {
          name: "tab-view-bar",
          props: ["tabs", "tabTypes"],
          data() {
            return { additionalAllowed: this.getAdditionalAllowed() };
          },
          methods: {
            getTabTitle(e) {
              if ("glyphs" === e.viewMode) return "Glyphs Overview";
              let t = this.formatTextContentString(e.data.liveText);
              return "text" === e.type && "" !== t
                ? t
                : e.title || this.tabTypes[e.name].title;
            },
            getAdditionalAllowed() {
              if (null == this.tabTypes) return {};
              let e = {};
              for (let t in this.tabTypes) {
                let n = this.tabTypes[t];
                null != n.allowAdditional && n.allowAdditional && (e[t] = n);
              }
              return e;
            },
            getCurrentTabIndex() {
              for (var e = 0; e < this.tabs.length; e++)
                if (this.tabs[e].open) return e;
              return 0;
            },
            handleTabClick(e) {
              this.$emit("tabsUpdate", e);
            },
            closeTab(e) {
              this.$emit("closeTab", e);
            },
            handleAdditionalTabClick(e) {
              this.$emit("updateAdditional", { name: e });
            },
            formatTextContentString(e) {
              (e = gt.stringStripHtml(e)),
                (e = e.replace(/&nbsp;/g, " ")),
                (e = e.trim());
              let t = e.length;
              return (e = e.substr(0, 100)), e.length < t && (e += "…"), e;
            },
          },
        };
        const cr = (0, A.Z)(lr, [
          ["render", rr],
          ["__scopeId", "data-v-68d80400"],
        ]);
        var ur = cr;
        const dr = (e) => (
            (0, s.dD)("data-v-ebd8b838"), (e = e()), (0, s.Cn)(), e
          ),
          pr = { class: "text-view__body custom-scrollbar" },
          gr = dr(() =>
            (0, s._)(
              "canvas",
              {
                id: "text-view__canvas",
                style: {
                  display: "none",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  "z-index": "10000",
                  width: "100%",
                  height: "100%",
                  opacity: "0.5",
                  "pointer-events": "none",
                },
              },
              null,
              -1
            )
          );
        function fr(e, t, n, a, o, r) {
          const l = (0, s.up)("text-waterfall"),
            c = (0, s.up)("style-range"),
            u = (0, s.up)("glyphs-overview"),
            d = (0, s.up)("text-default"),
            p = (0, s.up)("text-view-bar"),
            g = (0, s.up)("cinema-controls");
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "div",
              {
                class: "text-view flex cl",
                style: (0, i.j5)(r.getBackgroundStyle()),
                onDrop: t[0] || (t[0] = (t) => e.$emit("dropHandler", t)),
              },
              [
                (0, s._)("div", pr, [
                  (0, s._)(
                    "div",
                    {
                      class: (0, i.C_)([
                        "text-view__body__inner",
                        {
                          "text-view__body__inner--center-mode":
                            e.$store.getters.fg.centerMode,
                          "user-media-active": e.$store.getters.userMediaActive,
                        },
                      ]),
                    },
                    [
                      "waterfall" === n.tab.viewMode
                        ? ((0, s.wg)(),
                          (0, s.j4)(
                            l,
                            {
                              key: 0,
                              text: r.text,
                              tab: n.tab,
                              style: (0, i.j5)(r.getBodyStyleBase()),
                            },
                            null,
                            8,
                            ["text", "tab", "style"]
                          ))
                        : "style-range" === n.tab.viewMode
                        ? ((0, s.wg)(),
                          (0, s.j4)(
                            c,
                            {
                              key: 1,
                              tab: n.tab,
                              text: r.text,
                              liveText: r.liveText,
                              style: (0, i.j5)(r.getBodyStyle()),
                            },
                            null,
                            8,
                            ["tab", "text", "liveText", "style"]
                          ))
                        : "glyphs" === n.tab.viewMode
                        ? ((0, s.wg)(),
                          (0, s.j4)(
                            u,
                            {
                              key: 2,
                              tab: n.tab,
                              style: (0, i.j5)(r.getBodyStyle()),
                            },
                            null,
                            8,
                            ["tab", "style"]
                          ))
                        : ((0, s.wg)(),
                          (0, s.j4)(
                            d,
                            {
                              key: 3,
                              tab: n.tab,
                              style: (0, i.j5)(r.getBodyStyle()),
                              text: r.text,
                              liveText: r.liveText,
                            },
                            null,
                            8,
                            ["tab", "style", "text", "liveText"]
                          )),
                    ],
                    2
                  ),
                ]),
                gr,
                (0, s.Wm)(p),
                e.$store.getters.isFontVariable &&
                e.$store.state.settings.presentationMode
                  ? ((0, s.wg)(), (0, s.j4)(g, { key: 0 }))
                  : (0, s.kq)("", !0),
              ],
              36
            )
          );
        }
        const hr = (e) => (
            (0, s.dD)("data-v-1ac34c66"), (e = e()), (0, s.Cn)(), e
          ),
          mr = { class: "text-view-bar bar blur" },
          br = { class: "text-view-bar__section flex rw ai-c" },
          vr = hr(() => (0, s._)("button", { class: "square" }, " ", -1)),
          wr = (0, s.Uk)("  "),
          yr = hr(() => (0, s._)("span", null, "View:", -1)),
          xr = { class: "text-view-bar__section flex rw jc-fe" },
          _r = { class: "search" },
          Sr = ["value"],
          Tr = hr(() => (0, s._)("span", { class: "icon" }, "📷", -1)),
          kr = (0, s.Uk)(" Screenshot"),
          Fr = hr(() =>
            (0, s._)(
              "sup",
              { class: "tt--u", style: { color: "var(--color--blue)" } },
              " Beta",
              -1
            )
          ),
          Cr = [Tr, kr, Fr],
          Dr = hr(() => (0, s._)("span", { class: "icon" }, "", -1)),
          Ar = (0, s.Uk)(" Copy CSS Code "),
          Mr = [Dr, Ar];
        function $r(e, t, n, o, r, l) {
          return (0, s.wy)(
            ((0, s.wg)(),
            (0, s.iD)(
              "div",
              mr,
              [
                (0, s._)("div", br, [
                  e.$store.state.sidebar.open
                    ? (0, s.kq)("", !0)
                    : ((0, s.wg)(), (0, s.iD)(s.HY, { key: 0 }, [vr, wr], 64)),
                  yr,
                  (0, s._)(
                    "button",
                    {
                      class: (0, i.C_)({
                        active: null == e.$store.getters.viewMode,
                      }),
                      onClick:
                        t[0] ||
                        (t[0] = (t) =>
                          e.$store.dispatch("updateTabViewMode", null)),
                    },
                    " Plain ",
                    2
                  ),
                  (0, s._)(
                    "button",
                    {
                      class: (0, i.C_)({
                        active: "waterfall" === e.$store.getters.viewMode,
                      }),
                      onClick:
                        t[1] ||
                        (t[1] = (t) =>
                          e.$store.dispatch("updateTabViewMode", "waterfall")),
                    },
                    " Waterfall ",
                    2
                  ),
                  e.$store.getters.isFontVariable
                    ? ((0, s.wg)(),
                      (0, s.iD)(
                        "button",
                        {
                          key: 1,
                          class: (0, i.C_)({
                            active: "style-range" === e.$store.getters.viewMode,
                          }),
                          onClick:
                            t[2] ||
                            (t[2] = (t) =>
                              e.$store.dispatch(
                                "updateTabViewMode",
                                "style-range"
                              )),
                        },
                        " Styles ",
                        2
                      ))
                    : (0, s.kq)("", !0),
                  (0, s._)(
                    "button",
                    {
                      class: (0, i.C_)({
                        active: "glyphs" === e.$store.getters.viewMode,
                      }),
                      onClick:
                        t[3] ||
                        (t[3] = (t) =>
                          e.$store.dispatch("updateTabViewMode", "glyphs")),
                    },
                    " Glyphs ",
                    2
                  ),
                  (0, s._)(
                    "button",
                    {
                      onClick:
                        t[4] ||
                        (t[4] = (t) =>
                          e.$store.dispatch("togglePresentationMode")),
                    },
                    "Present"
                  ),
                ]),
                (0, s._)("div", xr, [
                  (0, s.wy)(
                    (0, s._)(
                      "label",
                      _r,
                      [
                        (0, s._)(
                          "input",
                          {
                            type: "text",
                            name: "",
                            value: e.$store.getters.searchString,
                            placeholder: "Search",
                            spellcheck: "false",
                            style: { width: "100%", "max-width": "200px" },
                            onInput:
                              t[5] ||
                              (t[5] = (e) => l.handleSearch(e.target.value)),
                          },
                          null,
                          40,
                          Sr
                        ),
                        e.$store.getters.searchString
                          ? ((0, s.wg)(),
                            (0, s.iD)("span", {
                              key: 0,
                              onClick:
                                t[6] ||
                                (t[6] = (e) =>
                                  l.clearSearch(
                                    e.target.previousElementSibling
                                  )),
                            }))
                          : (0, s.kq)("", !0),
                      ],
                      512
                    ),
                    [[a.F8, "glyphs" === e.$store.getters.viewMode]]
                  ),
                  (0, s.wy)(
                    (0, s._)(
                      "button",
                      {
                        onClick:
                          t[7] ||
                          (t[7] = (t) => e.$store.dispatch("takeScreenshot")),
                      },
                      Cr,
                      512
                    ),
                    [[a.F8, null == e.$store.getters.viewMode]]
                  ),
                  (0, s._)(
                    "button",
                    {
                      onClick:
                        t[8] ||
                        (t[8] = (t) => e.$store.dispatch("copyCssCode")),
                    },
                    Mr
                  ),
                ]),
              ],
              512
            )),
            [[a.F8, !e.$store.state.settings.presentationMode]]
          );
        }
        var Ir = {
          name: "text-view-bar",
          props: ["tab"],
          methods: {
            async toggleWaterfallMode() {
              this.$store.dispatch("toggleTabDataValue", {
                name: "waterfallMode",
              });
            },
            async toggleAutoSizeText() {
              await this.$store.dispatch("toggleTabDataValue", {
                name: "autoSizeText",
              }),
                this.tab.data.autoSizeText &&
                  this.$store.dispatch("autoSizeText");
            },
            handleSearch(e) {
              this.$store.dispatch(
                "updateTabSearchString",
                e.toLowerCase().trim()
              );
            },
            clearSearch(e) {
              this.$store.dispatch("updateTabSearchString", null),
                (e.value = "");
            },
          },
        };
        const Vr = (0, A.Z)(Ir, [
          ["render", $r],
          ["__scopeId", "data-v-1ac34c66"],
        ]);
        var Pr = Vr;
        const Or = (e) => (
            (0, s.dD)("data-v-71dd34b3"), (e = e()), (0, s.Cn)(), e
          ),
          Lr = { key: 0, class: "icon" },
          Br = { key: 1, class: "icon" },
          Hr = Or(() => (0, s._)("span", { class: "icon" }, "", -1)),
          jr = [Hr],
          Nr = Or(() => (0, s._)("span", { class: "icon" }, "🎤", -1)),
          zr = [Nr],
          Er = { style: { flex: "1 1 100%" }, class: "cinema-controls__axes" };
        function Ur(e, t, n, a, o, r) {
          const l = (0, s.up)("axes");
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "div",
              {
                class: (0, i.C_)([
                  "cinema-controls",
                  { "cinema-controls--active": o.show },
                ]),
              },
              [
                (0, s._)(
                  "div",
                  {
                    class: (0, i.C_)([
                      "cinema-controls__large",
                      {
                        "cinema-controls__large--compact":
                          Object.keys(e.$store.getters.axes).length < 2,
                      },
                    ]),
                  },
                  [
                    (0, s._)(
                      "button",
                      {
                        onClick:
                          t[0] ||
                          (t[0] = (t) =>
                            e.$store.dispatch("toggleAllAxisAnimating")),
                      },
                      [
                        e.$store.getters.animating
                          ? ((0, s.wg)(), (0, s.iD)("span", Lr, ""))
                          : ((0, s.wg)(), (0, s.iD)("span", Br, "")),
                      ]
                    ),
                    (0, s._)(
                      "button",
                      {
                        onClick:
                          t[1] ||
                          (t[1] = (t) =>
                            e.$store.dispatch(
                              "resetAllAxes",
                              e.$store.state.font
                            )),
                      },
                      jr
                    ),
                    (0, s._)(
                      "button",
                      {
                        onClick:
                          t[2] ||
                          (t[2] = (t) =>
                            e.$store.dispatch("toggleMicrophoneAll")),
                        class: (0, i.C_)({
                          "cs--red": e.$store.getters.userMediaActive,
                          glow: e.$store.getters.userMediaActive,
                        }),
                      },
                      zr,
                      2
                    ),
                  ],
                  2
                ),
                (0, s._)("div", Er, [(0, s.Wm)(l)]),
              ],
              2
            )
          );
        }
        var Rr = {
          name: "cinema-controls",
          components: { Axes: Ni },
          data() {
            return { show: !0 };
          },
          created() {
            window.addEventListener("mousemove", (e) => {
              this.show = window.innerHeight - e.clientY < 150;
            });
          },
        };
        const Wr = (0, A.Z)(Rr, [
          ["render", Ur],
          ["__scopeId", "data-v-71dd34b3"],
        ]);
        var qr = Wr;
        const Yr = { class: "text-waterfall" },
          Gr = { class: "text-waterfall__row__label" },
          Kr = { class: "text-waterfall__row__text" };
        function Zr(e, t, n, a, o, r) {
          const l = (0, s.up)("font-text");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", Yr, [
              ((0, s.wg)(!0),
              (0, s.iD)(
                s.HY,
                null,
                (0, s.Ko)(
                  o.fontSizes,
                  (t) => (
                    (0, s.wg)(),
                    (0, s.iD)(
                      "div",
                      {
                        class: (0, i.C_)([
                          "text-waterfall__row",
                          {
                            "text-waterfall__row--rtl":
                              "rtl" === e.$store.getters.fg.direction,
                          },
                        ]),
                        key: t,
                      },
                      [
                        (0, s._)("div", Gr, (0, i.zw)(t) + "px", 1),
                        (0, s._)("div", Kr, [
                          (0, s.Wm)(
                            l,
                            {
                              text: r.formatWaterfallText(n.text),
                              style: (0, i.j5)({
                                ...n.style,
                                "font-size": `${t}px`,
                                "line-height": r.getWaterfallRowLineHeight(t),
                              }),
                              onKeydown: r.handleWaterfallKeydown,
                              onInput: r.handleWaterfallLiveInput,
                              onBlur: r.handleBodyTextChange,
                            },
                            null,
                            8,
                            ["text", "style", "onKeydown", "onInput", "onBlur"]
                          ),
                        ]),
                      ],
                      2
                    )
                  )
                ),
                128
              )),
            ])
          );
        }
        const Xr = ["id", "innerHTML"];
        function Jr(e, t, n, a, o, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "div",
              {
                class: "font-text text-no-child-formatting",
                style: (0, i.j5)(n.style),
                id: n.id,
                ref: "text",
                onKeydown: t[0] || (t[0] = (t) => e.$emit("keydown", t)),
                onInput: t[1] || (t[1] = (t) => e.$emit("input", t)),
                onBlur: t[2] || (t[2] = (t) => e.$emit("blur", t)),
                onPaste: t[3] || (t[3] = (...e) => r.paste && r.paste(...e)),
                contenteditable: "true",
                spellcheck: "false",
                key: n.text.id,
                innerHTML: n.text.text,
              },
              null,
              44,
              Xr
            )
          );
        }
        var Qr = {
          name: "font-text",
          props: ["text", "style", "keydown", "input", "blur", "id"],
          methods: {
            paste(e) {
              e.preventDefault();
              let t = e.clipboardData.getData("Text");
              document.execCommand("insertText", !1, t);
            },
          },
        };
        const el = (0, A.Z)(Qr, [["render", Jr]]);
        var tl = el,
          nl = {
            name: "text-waterfall",
            props: ["tab", "style", "text"],
            components: { FontText: tl },
            data() {
              return {
                fontSizes: [
                  180, 140, 110, 90, 70, 60, 50, 40, 30, 24, 20, 16, 14, 12, 10,
                  9, 8, 7,
                ],
              };
            },
            methods: {
              doPreventWaterfallKey(e) {
                return 13 === e.keyCode;
              },
              handleTextLiveInput(e) {
                this.$store.commit("setTabDataValue", {
                  name: "liveText",
                  value: e.target.innerHTML,
                });
              },
              handleWaterfallLiveInput(e) {
                this.handleTextLiveInput(e);
                let t = document.querySelectorAll(
                  ".text-waterfall__row__text .font-text"
                );
                for (let n of t)
                  n != e.target &&
                    (n.innerHTML = this.formatWaterfallText(
                      e.target.innerHTML
                    ));
              },
              handleBodyTextChange(e) {
                (e.target.parentNode.scrollLeft = 0),
                  this.$store.dispatch(
                    "forceUpdateTabTextValue",
                    e.target.innerHTML
                  );
              },
              handleWaterfallKeydown(e) {
                if (this.doPreventWaterfallKey(e)) return e.preventDefault();
              },
              getWaterfallRowLineHeight(e) {
                return e <= 10
                  ? 4
                  : e <= 20
                  ? 3
                  : e <= 25
                  ? 2.5
                  : e <= 30 || e < 50
                  ? 2
                  : e < 70
                  ? 1.5
                  : e < 100
                  ? 1.3
                  : "normal";
              },
              formatWaterfallText(e) {
                return e;
              },
            },
          };
        const al = (0, A.Z)(nl, [
          ["render", Zr],
          ["__scopeId", "data-v-0beac6b4"],
        ]);
        var sl = al;
        function il(e, t, n, a, o, r) {
          const l = (0, s.up)("font-text");
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "div",
              {
                class: "text-view__text",
                style: (0, i.j5)({ padding: `${r.padding}px` }),
              },
              [
                (0, s.Wm)(
                  l,
                  {
                    text: n.text,
                    style: (0, i.j5)(n.style),
                    onInput: r.handleTextLiveInput,
                    onBlur: r.blur,
                  },
                  null,
                  8,
                  ["text", "style", "onInput", "onBlur"]
                ),
                (0, s.Wm)(
                  l,
                  {
                    id: "virtual-text",
                    text: n.liveText,
                    style: (0, i.j5)(n.style),
                  },
                  null,
                  8,
                  ["text", "style"]
                ),
              ],
              4
            )
          );
        }
        var ol = {
          name: "text-default",
          props: ["tab", "style", "text", "liveText"],
          components: { FontText: tl },
          computed: {
            padding: function () {
              let e = 0.5 * this.tab.data.style.fg.fontSize;
              return e < 8 && (e = 8), e > 20 && (e = null), e;
            },
          },
          methods: {
            async handleTextLiveInput(e) {
              this.tab.data.liveText !== e.target.innerHTML &&
                (await this.$store.commit("setTabDataValue", {
                  name: "liveText",
                  value: e.target.innerHTML,
                }),
                (0, s.Y3)(() => {
                  this.tab.data.autoSizeText &&
                    this.$store.dispatch("autoSizeText");
                }));
            },
            blur(e) {
              this.$store.dispatch(
                "forceUpdateTabTextValue",
                e.target.innerHTML
              );
            },
          },
        };
        const rl = (0, A.Z)(ol, [
          ["render", il],
          ["__scopeId", "data-v-b82e7ef6"],
        ]);
        var ll = rl;
        const cl = { class: "style-range" },
          ul = { class: "style-range__row__label flex rw jc-sb" },
          dl = { class: "coordinates" };
        function pl(e, t, n, a, o, r) {
          const l = (0, s.up)("font-text"),
            c = (0, s.up)("RecycleScroller");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", cl, [
              (0, s.Wm)(
                c,
                {
                  class: "scroller",
                  items: e.$store.getters.instances,
                  "item-size": 1.2 * e.$store.getters.fg.fontSize + 35,
                  buffer: 400,
                },
                {
                  default: (0, s.w5)(({ item: t }) => [
                    ((0, s.wg)(),
                    (0, s.iD)(
                      "div",
                      {
                        class: "style-range__row",
                        key: t.name,
                        style: (0, i.j5)({
                          height:
                            1.2 * e.$store.getters.fg.fontSize + 35 + "px",
                        }),
                      },
                      [
                        (0, s._)("div", ul, [
                          (0, s._)("span", null, (0, i.zw)(t.name), 1),
                          (0, s._)(
                            "span",
                            dl,
                            (0, i.zw)(
                              r.getCoordinatesAsPrettyString(t.coordinates)
                            ),
                            1
                          ),
                        ]),
                        (0, s._)(
                          "div",
                          {
                            class: "style-range__row__text",
                            style: (0, i.j5)({
                              padding: `0 0 0 ${r.padding}px`,
                              height: 1.2 * e.$store.getters.fg.fontSize + "px",
                            }),
                          },
                          [
                            (0, s.Wm)(
                              l,
                              {
                                text: n.text,
                                style: (0, i.j5)(r.getInstanceStyle(t)),
                                onInput: r.handleWaterfallLiveInput,
                                onBlur: r.handleBodyTextChange,
                              },
                              null,
                              8,
                              ["text", "style", "onInput", "onBlur"]
                            ),
                          ],
                          4
                        ),
                      ],
                      4
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["items", "item-size"]
              ),
            ])
          );
        }
        var gl = {
          name: "style-range",
          props: ["tab", "style", "text"],
          components: { FontText: tl },
          computed: {
            padding: function () {
              let e = 0.5 * this.tab.data.style.fg.fontSize;
              return e < 10 && (e = 10), e > 20 && (e = null), e;
            },
          },
          methods: {
            async handleTextLiveInput(e) {
              this.tab.data.liveText !== e.target.innerHTML &&
                (await this.$store.commit("setTabDataValue", {
                  name: "liveText",
                  value: e.target.innerHTML,
                }),
                (0, s.Y3)(() => {
                  this.tab.data.autoSizeText &&
                    this.$store.dispatch("autoSizeText");
                }));
            },
            handleBodyTextChange(e) {
              this.$store.dispatch(
                "forceUpdateTabTextValue",
                e.target.innerHTML
              );
            },
            handleWaterfallLiveInput(e) {
              this.handleTextLiveInput(e);
              let t = document.querySelectorAll(".style-range .font-text");
              for (let n of t)
                n != e.target && (n.innerHTML = e.target.innerHTML);
            },
            getInstanceStyle(e) {
              let t = { ...this.style };
              return (t.fontVariationSettings = e.fontVariationSettings), t;
            },
            getCoordinatesAsPrettyString(e) {
              let t = [];
              for (let n in e)
                t.push(
                  `${this.$store.getters.getAxisByIndex(n).name}: ${e[
                    n
                  ].toFixed(2)}`
                );
              return t.join(", ");
            },
          },
        };
        const fl = (0, A.Z)(gl, [
          ["render", pl],
          ["__scopeId", "data-v-7f29b256"],
        ]);
        var hl = fl;
        const ml = ["onClick"],
          bl = ["innerHTML"],
          vl = { key: 0, class: "text-overflow-ellipsis" },
          wl = { key: 1, class: "text-overflow-ellipsis tt--u" },
          yl = ["href"];
        function xl(e, t, n, a, o, r) {
          const l = (0, s.up)("RecycleScroller");
          return (
            (0, s.wg)(),
            (0, s.iD)(
              "div",
              { class: "glyphs-overview", style: (0, i.j5)(r.gostyle) },
              [
                (0, s.Wm)(
                  l,
                  {
                    class: "scroller",
                    items: r.rows,
                    "item-size": r.rowHeight,
                    buffer: 400,
                    keyField: "",
                    "page-mode": "",
                  },
                  {
                    default: (0, s.w5)(({ item: e }) => [
                      (0, s._)(
                        "div",
                        {
                          class: "glyphs-overview__row",
                          style: (0, i.j5)({
                            height: `${r.rowHeight}px`,
                            gridTemplateColumns: `repeat(${r.columns}, 1fr)`,
                          }),
                        },
                        [
                          ((0, s.wg)(!0),
                          (0, s.iD)(
                            s.HY,
                            null,
                            (0, s.Ko)(
                              e,
                              (e, t) => (
                                (0, s.wg)(),
                                (0, s.iD)("div", { class: "glyph", key: t }, [
                                  (0, s._)(
                                    "div",
                                    {
                                      class: "glyph__inner",
                                      onClick: (t) => r.copyGlyph(e),
                                    },
                                    [
                                      (0, s._)(
                                        "span",
                                        { innerHTML: e.html },
                                        null,
                                        8,
                                        bl
                                      ),
                                    ],
                                    8,
                                    ml
                                  ),
                                  (0, s._)(
                                    "div",
                                    {
                                      class: "glyph__label",
                                      style: (0, i.j5)({
                                        "font-size": r.labelFontSize,
                                      }),
                                    },
                                    [
                                      e.name
                                        ? ((0, s.wg)(),
                                          (0, s.iD)(
                                            "span",
                                            vl,
                                            (0, i.zw)(e.name),
                                            1
                                          ))
                                        : ((0, s.wg)(),
                                          (0, s.iD)(
                                            "span",
                                            wl,
                                            (0, i.zw)(e.hex),
                                            1
                                          )),
                                      e.hex && r.columns < 12
                                        ? ((0, s.wg)(),
                                          (0, s.iD)(
                                            "a",
                                            {
                                              key: 2,
                                              class: "glyph__label__code tt--u",
                                              target: "_blank",
                                              href: `https://unicode-table.com/en/${e.hex}`,
                                            },
                                            "   " + (0, i.zw)(e.hex),
                                            9,
                                            yl
                                          ))
                                        : (0, s.kq)("", !0),
                                    ],
                                    4
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ],
                        4
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items", "item-size"]
                ),
              ],
              4
            )
          );
        }
        var _l = {
          name: "glyphs-overview",
          props: ["tab", "style"],
          data() {
            return { gridScalar: 1.8 };
          },
          computed: {
            fontSize: function () {
              let e = this.tab.data.style.fg.fontSize;
              return e > 200 && (e = 200), e < 28 && (e = 28), e;
            },
            labelFontSize: function () {
              return this.fontSize <= 28
                ? "9px"
                : this.fontSize <= 34
                ? "10px"
                : null;
            },
            gostyle: function () {
              let e = this.style;
              return (e.fontSize = `${this.fontSize}px`), e;
            },
            columns: function () {
              return Math.round(
                (window.innerWidth - this.$store.state.sidebar.width) /
                  (this.fontSize * this.gridScalar * 1.05)
              );
            },
            searchString: function () {
              return this.$store.getters.searchString;
            },
            glyphs: function () {
              let e = this.$store.getters.font.glyphs;
              if (null != this.searchString && "" != this.searchString) {
                let t = [];
                for (let n of e) this.isGlyphDisplayed(n) && t.push(n);
                e = t;
              }
              return e;
            },
            rowHeight: function () {
              return this.fontSize * this.gridScalar + 15;
            },
            rows: function () {
              let e = [];
              for (let t = 0; t < this.glyphs.length; t += this.columns) {
                let n = this.glyphs.slice(t, t + this.columns);
                e.push(n);
              }
              return e;
            },
            padding: function () {
              return 10;
            },
          },
          methods: {
            isGlyphDisplayed(e) {
              return (
                "" === this.searchString ||
                !(
                  null == e.name ||
                  !e.name.toLowerCase().includes(this.searchString)
                ) ||
                !(
                  null == e.hex ||
                  !e.hex.toLowerCase().includes(this.searchString)
                )
              );
            },
            copyGlyph(e) {
              null != e.unicode && navigator.clipboard.writeText(e.unicode);
            },
          },
        };
        const Sl = (0, A.Z)(_l, [
          ["render", xl],
          ["__scopeId", "data-v-e61890de"],
        ]);
        var Tl = Sl,
          kl = {
            name: "body-text-view",
            props: ["tab", "data"],
            components: {
              CinemaControls: qr,
              TextViewBar: Pr,
              TextDefault: ll,
              TextWaterfall: sl,
              StyleRange: hl,
              GlyphsOverview: Tl,
            },
            computed: {
              fg: function () {
                return this.tab.data.style.fg;
              },
              text: function () {
                return { id: gt.uid(), text: this.tab.data.text };
              },
              liveText: function () {
                return { id: gt.uid(), text: this.tab.data.liveText };
              },
            },
            methods: {
              async toggleWaterfallMode() {
                this.$store.dispatch("toggleTabDataValue", {
                  name: "waterfallMode",
                });
              },
              async toggleAutoSizeText() {
                await this.$store.dispatch("toggleTabDataValue", {
                  name: "autoSizeText",
                }),
                  this.tab.data.autoSizeText &&
                    this.$store.dispatch("autoSizeText");
              },
              getTextAlign() {
                return this.fg.centerMode
                  ? "center"
                  : "rtl" === this.fg.direction && "left" === this.fg.textAlign
                  ? ""
                  : this.fg.textAlign;
              },
              getBodyStyle() {
                let e = this.getBodyStyleBase();
                return (
                  (e.lineHeight = this.fg.lineHeight),
                  (e.fontSize = `${this.fg.fontSize}px`),
                  e
                );
              },
              getBodyStyleBase() {
                let e = {
                  fontFamily: `"${this.$store.getters.fontFaceId}"`,
                  fontFeatureSettings: gt.getOpentypeFeaturesArrayAsCssString(
                    this.fg.fontFeatureSettings
                  ),
                  fontVariationSettings:
                    this.$store.getters.fontVariationSettings,
                  letterSpacing: `${this.fg.letterSpacing}em`,
                  color: this.fg.color,
                  textTransform: this.fg.textTransform,
                };
                "glyphs" !== this.$store.getters.viewMode &&
                  ((e.textAlign = this.getTextAlign()),
                  (e.direction =
                    null == this.fg.direction ? "ltr" : this.fg.direction));
                const t = ["liga", "calt", "rlig", "kern", "rvrn", "rclt"];
                for (let n of t)
                  if (!this.fg.fontFeatureSettings.includes(n)) {
                    let t = "" == e.fontFeatureSettings ? "" : ", ";
                    e.fontFeatureSettings += `${t}"${n}" 0`;
                  }
                return e;
              },
              getBackgroundStyle() {
                let e = {
                  backgroundColor: this.tab.data.style.bg.backgroundColor,
                };
                return e;
              },
            },
          };
        const Fl = (0, A.Z)(kl, [
          ["render", fr],
          ["__scopeId", "data-v-ebd8b838"],
        ]);
        var Cl = Fl;
        const Dl = (e) => (
            (0, s.dD)("data-v-48e0cb34"), (e = e()), (0, s.Cn)(), e
          ),
          Al = { class: "start-view custom-scrollbar" },
          Ml = { class: "start-view__modal usn" },
          $l = (0, s.Uk)(" Drop or  "),
          Il = { key: 1, class: "button h2" },
          Vl = (0, s.Uk)("  Open  "),
          Pl = (0, s.Uk)("  your font to get started"),
          Ol = Dl(() => (0, s._)("br", null, null, -1)),
          Ll = (0, s.Uk)("or resume your  "),
          Bl = { key: 0, class: "dinamo-fonts" },
          Hl = (0, s.Uk)(" Open a Dinamo Variable Font"),
          jl = Dl(() => (0, s._)("br", null, null, -1)),
          Nl = Dl(() => (0, s._)("br", null, null, -1)),
          zl = {
            class: "start-view__modal__fonts button-group",
            style: { "justify-content": "center" },
          },
          El = ["onClick"],
          Ul = { class: "start-view__footer usn" },
          Rl = { key: 0 },
          Wl = Dl(() => (0, s._)("span", { class: "icon" }, "", -1)),
          ql = (0, s.Uk)(" You are offline. Some features are limited."),
          Yl = Dl(() => (0, s._)("br", null, null, -1)),
          Gl = Dl(() => (0, s._)("br", null, null, -1)),
          Kl = [Wl, ql, Yl, Gl],
          Zl = { class: "flex rw jc-c" },
          Xl = (0, s.Uk)("    "),
          Jl = Dl(() => (0, s._)("span", { class: "icon" }, "", -1)),
          Ql = (0, s.Uk)(" Settings "),
          ec = [Jl, Ql],
          tc = (0, s.Uk)("    "),
          nc = Dl(() => (0, s._)("br", null, null, -1));
        function ac(e, t, n, a, o, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)("div", Al, [
              (0, s._)("div", Ml, [
                (0, s._)("h2", null, [
                  $l,
                  e.$store.state.window.fileSystemAccess
                    ? ((0, s.wg)(),
                      (0, s.iD)(
                        "button",
                        {
                          key: 0,
                          class: "h2",
                          onClick:
                            t[0] ||
                            (t[0] = (t) =>
                              e.$store.dispatch(
                                "openFontWithFileSystemDialog"
                              )),
                        },
                        "  Open  "
                      ))
                    : ((0, s.wg)(),
                      (0, s.iD)("label", Il, [
                        Vl,
                        (0, s._)(
                          "input",
                          {
                            type: "file",
                            style: {
                              display: "none",
                              position: "fixed",
                              top: "-100em",
                            },
                            onChange:
                              t[1] ||
                              (t[1] = (t) =>
                                e.$store.dispatch("openFontFromFileEvent", t)),
                          },
                          null,
                          32
                        ),
                      ])),
                  Pl,
                  Ol,
                  e.$store.state.lastSessionExists
                    ? ((0, s.wg)(),
                      (0, s.iD)(
                        s.HY,
                        { key: 2 },
                        [
                          Ll,
                          (0, s._)(
                            "button",
                            {
                              class: "h2",
                              onClick:
                                t[2] ||
                                (t[2] = (t) =>
                                  e.$store.dispatch("openLastSession")),
                            },
                            "  Last Session  "
                          ),
                        ],
                        64
                      ))
                    : (0, s.kq)("", !0),
                ]),
                e.$store.state.server &&
                e.$store.state.preferences.showDinamoFonts
                  ? ((0, s.wg)(),
                    (0, s.iD)("div", Bl, [
                      Hl,
                      jl,
                      Nl,
                      (0, s._)("div", zl, [
                        ((0, s.wg)(!0),
                        (0, s.iD)(
                          s.HY,
                          null,
                          (0, s.Ko)(
                            o.dinamoFonts,
                            (t, n) => (
                              (0, s.wg)(),
                              (0, s.iD)(
                                "button",
                                {
                                  key: n,
                                  onClick: (n) =>
                                    e.$store.dispatch("openFontFromUrl", {
                                      url: `/static/fonts/${t.url}`,
                                      familyName: t.familyName,
                                      disableInstanceGeneration: !0,
                                    }),
                                },
                                (0, i.zw)(t.name),
                                9,
                                El
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]))
                  : (0, s.kq)("", !0),
              ]),
              (0, s._)("div", Ul, [
                e.$store.state.online
                  ? (0, s.kq)("", !0)
                  : ((0, s.wg)(), (0, s.iD)("span", Rl, Kl)),
                (0, s._)("div", Zl, [
                  (0, s._)(
                    "button",
                    {
                      class: "glow blue",
                      onClick:
                        t[3] ||
                        (t[3] = (t) =>
                          e.$store.commit("setDashboardTab", "features")),
                    },
                    "New Features"
                  ),
                  Xl,
                  (0, s._)(
                    "button",
                    {
                      onClick:
                        t[4] ||
                        (t[4] = (t) =>
                          e.$store.commit("setDashboardTab", "settings")),
                    },
                    ec
                  ),
                  tc,
                  (0, s._)(
                    "button",
                    {
                      onClick:
                        t[5] ||
                        (t[5] = (t) =>
                          e.$store.commit("setDashboardTab", "changelog")),
                    },
                    " Last updated " + (0, i.zw)(e.$store.getters.lastUpdated),
                    1
                  ),
                ]),
                (0, s._)("span", null, [
                  nc,
                  (0, s.Uk)(" " + (0, i.zw)(o.uiText.privacy), 1),
                ]),
              ]),
            ])
          );
        }
        var sc = n(1343),
          ic = {
            name: "start-view",
            props: ["tab", "data"],
            data() {
              return {
                uiText: sc,
                dinamoFonts: [
                  {
                    name: "ABC Arizona",
                    familyName: "ABC Arizona Plus Variable",
                    url: "ABCArizonaPlusVariable.woff2",
                  },
                  {
                    name: "ABC Diatype",
                    familyName: "ABC Diatype Plus Variable",
                    url: "ABCDiatypePlusVariable.woff2",
                  },
                  {
                    name: "ABC Camera",
                    familyName: "ABC Camera Variable",
                    url: "ABCCameraVariable.woff2",
                  },
                  {
                    name: "ABC Camera Plain",
                    familyName: "ABC Camera Plain Variable",
                    url: "ABCCameraPlainVariable.woff2",
                  },
                  {
                    name: "ABC Favorit",
                    familyName: "ABC Favorit Variable",
                    url: "ABCFavoritVariable.woff2",
                  },
                  {
                    name: "ABC Ginto",
                    familyName: "ABC Ginto Plus Variable",
                    url: "ABCGintoPlusVariable.woff2",
                  },
                  {
                    name: "ABC Gravity",
                    familyName: "ABC Gravity Variable",
                    url: "ABCGravityVariable.woff2",
                  },
                  {
                    name: "ABC Helveesti",
                    familyName: "ABC Helveesti Plus Variable",
                    url: "ABCHelveestiPlusVariable.woff2",
                  },
                  {
                    name: "ABC Marfa",
                    familyName: "ABC Marfa Variable",
                    url: "ABCMarfaVariable.woff2",
                  },
                  {
                    name: "ABC Maxi",
                    familyName: "ABC Maxi Plus Variable",
                    url: "ABCMaxiPlusVariable.woff2",
                  },
                  {
                    name: "ABC Monument Grotesk",
                    familyName: "ABC Monument Grotesk Variable",
                    url: "ABCMonumentGroteskVariable.woff2",
                  },
                  {
                    name: "ABC Prophet",
                    familyName: "ABC Prophet Variable",
                    url: "ABCProphetVariable.woff2",
                  },
                  {
                    name: "ABC Social",
                    familyName: "ABC Social Plus Variable",
                    url: "ABCSocialPlusVariable.woff2",
                  },
                  {
                    name: "ABC Synt",
                    familyName: "ABC Synt Variable",
                    url: "ABCSyntVariable.woff2",
                  },
                  {
                    name: "ABC Whyte",
                    familyName: "ABC Whyte Plus Variable",
                    url: "ABCWhytePlusVariable.woff2",
                  },
                ],
              };
            },
          };
        const oc = (0, A.Z)(ic, [
          ["render", ac],
          ["__scopeId", "data-v-48e0cb34"],
        ]);
        var rc = oc,
          lc = {
            extends: Jo,
            name: "tab-view",
            props: ["tabs", "items", "tabStyle"],
            data() {
              return {
                tabIndex: 0,
                tabTypes: {
                  text: {
                    type: "text",
                    component: (0, ee.Xl)(Cl),
                    allowAdditional: !0,
                  },
                },
              };
            },
            components: { "tab-view-bar": (0, ee.Xl)(ur), "start-view": rc },
            computed: {
              tabComponent: function () {
                return this.tabTypes[this.$store.getters.tab.type].component;
              },
              tab: function () {
                return this.$store.getters.tab;
              },
            },
            methods: {
              tabsUpdate(e) {
                this.$store.dispatch("setCurrentTab", e);
              },
              closeTab(e) {
                this.$store.dispatch("deleteTabByIndex", e);
              },
              updateAdditional(e) {
                this.$store.dispatch("addTabToCurrentSession", e);
              },
            },
          };
        const cc = (0, A.Z)(lc, [
          ["render", Yo],
          ["__scopeId", "data-v-b9c2c4aa"],
        ]);
        var uc = cc,
          dc = {
            name: "app",
            data() {
              return { dropzoneActive: !1, keysDown: { meta: !1 } };
            },
            components: {
              Notifications: $,
              PanelView: Y,
              Sidebar: Ro,
              TabView: uc,
            },
            methods: {
              dropHandler(e) {
                event.preventDefault(),
                  (this.dropzoneActive = !1),
                  this.dropHandlerBrowser(e);
              },
              dropHandlerBrowser(e) {
                this.$store.dispatch("openFontFromDropEvent", e);
              },
            },
            created() {
              this.$store.dispatch("initApp"),
                window.addEventListener("load", () =>
                  setTimeout(() => this.$store.commit("windowLoaded"), 50)
                );
            },
            mounted() {
              function e(e) {
                (e.dataTransfer.dropEffect = "copy"), e.preventDefault();
              }
              this.$refs.dropzone.addEventListener("dragenter", e),
                this.$refs.dropzone.addEventListener("dragover", e),
                this.$refs.dropzone.addEventListener("drop", (e) => {
                  document.body.classList.remove("dropzone--active"),
                    this.dropHandler(e);
                }),
                window.addEventListener("dragenter", () => {
                  (this.dropzoneActive = !0),
                    document.body.classList.add("dropzone--active");
                }),
                this.$refs.dropzone.addEventListener("dragleave", () => {
                  (this.dropzoneActive = !1),
                    document.body.classList.remove("dropzone--active");
                });
            },
          };
        const pc = (0, A.Z)(dc, [
          ["render", u],
          ["__scopeId", "data-v-2a37dde5"],
        ]);
        var gc = pc,
          fc = n(5205);
        (0, fc.z)("service-worker.js", {
          ready() {
            console.log(
              "Service Worker: App is being served from cache by a service worker."
            );
          },
          registered() {
            console.log("Service Worker: Service worker has been registered.");
          },
          cached() {
            console.log(
              "Service Worker: Content has been cached for offline use."
            );
          },
          updatefound() {
            console.log("Service Worker: New content is downloading."),
              vs.dispatch("showNotification", {
                text: "Font Gauntlet is updating, please wait...",
                length: "infinite",
                icon: "spinner",
              });
          },
          updated() {
            console.log(
              "Service Worker: New content is available; please refresh."
            ),
              window.location.reload();
          },
          offline() {
            console.log(
              "Service Worker: No internet connection found. App is running in offline mode."
            );
          },
          error(e) {
            console.error(
              "Service Worker: Error during service worker registration:",
              e
            );
          },
        });
        var hc = n(64);
        function mc() {
          return !vs.state.standalone;
        }
        let bc = [
          { key: "f", meta: !0, event: "togglePresentationMode" },
          {
            key: 219,
            meta: !0,
            shift: !0,
            ctrl: () => mc(),
            event: "previousTab",
          },
          { key: 221, meta: !0, shift: !0, ctrl: () => mc(), event: "nextTab" },
          {
            key: 84,
            meta: !0,
            shift: () => mc(),
            ctrl: () => mc(),
            event: "addTabToCurrentSession",
          },
          {
            key: 87,
            meta: !0,
            shift: () => mc(),
            ctrl: () => mc(),
            event: "deleteCurrentTab",
          },
          { keys: ["-"], meta: !0, event: "decreaseFontSize", category: "tab" },
          {
            keys: ["=", "+", "*"],
            meta: !0,
            event: "increaseFontSize",
            category: "tab",
          },
          {
            keys: ["-"],
            meta: !0,
            shift: !0,
            event: "decreaseLineHeight",
            category: "tab",
          },
          {
            keys: ["=", "+", "*"],
            meta: !0,
            shift: !0,
            event: "increaseLineHeight",
            category: "tab",
          },
        ];
        var vc = bc;
        class wc {
          constructor() {
            document.addEventListener("keydown", (e) => {
              vs.commit("setAppStandalone");
              for (let t of vc)
                if (this.isShortcut(t, e)) {
                  this.runShortcut(e, t);
                  break;
                }
            });
          }
          runShortcut(e, t) {
            e.preventDefault(),
              "tab" === t.category
                ? vs.dispatch("runTabShortcut", t.event)
                : vs.dispatch(t.event);
          }
          isShortcut(e, t) {
            if ("keys" in e) {
              if (!e.keys.includes(t.key) && !e.keys.includes(t.keyCode))
                return !1;
            } else if (t.key !== e.key && t.keyCode !== e.key) return !1;
            return (
              !(!t.metaKey && "meta" in e && !0 === e.meta) &&
              !(!t.shiftKey && "shift" in e && !0 === e.shift) &&
              !(!t.ctrlKey && "ctrl" in e && !0 === e.ctrl) &&
              (!t.metaKey || null != e["meta"]) &&
              (!t.shiftKey || null != e["shift"]) &&
              (!t.ctrlKey || null != e["ctrl"])
            );
          }
        }
        new wc();
        vs.commit("setOnline", window.navigator.onLine),
          window.addEventListener("offline", function () {
            vs.commit("setOnline", !1);
          }),
          window.addEventListener("online", function () {
            vs.commit("setOnline", !0);
          });
        const yc = (0, a.ri)(gc);
        yc.use(vs),
          yc.mount("#app-wrapper"),
          yc.use(hc.ZP),
          yc.component("object-viewer-recursive", Za);
      },
      5145: function (e) {
        e.exports = JSON.parse(
          '{"aalt":"Access All Alternates","abvf":"Above-base Forms","abvm":"Above-base Mark Positioning","abvs":"Above-base Substitutions","afrc":"Alternative Fractions","akhn":"Akhands","blwf":"Below-base Forms","blwm":"Below-base Mark Positioning","blws":"Below-base Substitutions","calt":"Contextual Alternates","case":"Case-Sensitive Forms","ccmp":"Glyph Composition/Decomposition","cfar":"Conjunct Form After Ro","cjct":"Conjunct Forms","clig":"Contextual Ligatures","cpct":"Centered CJK Punctuation","cpsp":"Capital Spacing","cswh":"Contextual Swash","curs":"Cursive Positioning","cv01-cv99":"Character Variants","c2pc":"Petite Capitals From Capitals","c2sc":"Small Capitals From Capitals","dist":"Distances","dlig":"Discretionary Ligatures","dnom":"Denominators","dtls":"Dotless Forms","expt":"Expert Forms","falt":"Final Glyph on Line Alternates","fin2":"Terminal Forms #2","fin3":"Terminal Forms #3","fina":"Terminal Forms","flac":"Flattened accent forms","frac":"Fractions","fwid":"Full Widths","half":"Half Forms","haln":"Halant Forms","halt":"Alternate Half Widths","hist":"Historical Forms","hkna":"Horizontal Kana Alternates","hlig":"Historical Ligatures","hngl":"Hangul","hojo":"Hojo Kanji Forms (JIS X 0212-1990 Kanji Forms)","hwid":"Half Widths","init":"Initial Forms","isol":"Isolated Forms","ital":"Italics","jalt":"Justification Alternates","jp78":"JIS78 Forms","jp83":"JIS83 Forms","jp90":"JIS90 Forms","jp04":"JIS2004 Forms","kern":"Kerning","lfbd":"Left Bounds","liga":"Standard Ligatures","ljmo":"Leading Jamo Forms","lnum":"Lining Figures","locl":"Localized Forms","ltra":"Left-to-right alternates","ltrm":"Left-to-right mirrored forms","mark":"Mark Positioning","med2":"Medial Forms #2","medi":"Medial Forms","mgrk":"Mathematical Greek","mkmk":"Mark to Mark Positioning","mset":"Mark Positioning via Substitution","nalt":"Alternate Annotation Forms","nlck":"NLC Kanji Forms","nukt":"Nukta Forms","numr":"Numerators","onum":"Oldstyle Figures","opbd":"Optical Bounds","ordn":"Ordinals","ornm":"Ornaments","palt":"Proportional Alternate Widths","pcap":"Petite Capitals","pkna":"Proportional Kana","pnum":"Proportional Figures","pref":"Pre-Base Forms","pres":"Pre-base Substitutions","pstf":"Post-base Forms","psts":"Post-base Substitutions","pwid":"Proportional Widths","qwid":"Quarter Widths","rand":"Randomize","rclt":"Required Contextual Alternates","rkrf":"Rakar Forms","rlig":"Required Ligatures","rphf":"Reph Forms","rtbd":"Right Bounds","rtla":"Right-to-left alternates","rtlm":"Right-to-left mirrored forms","ruby":"Ruby Notation Forms","rvrn":"Required Variation Alternates","salt":"Stylistic Alternates","sinf":"Scientific Inferiors","size":"Optical size","smcp":"Small Capitals","smpl":"Simplified Forms","ss01":"Stylistic Set 1","ss02":"Stylistic Set 2","ss03":"Stylistic Set 3","ss04":"Stylistic Set 4","ss05":"Stylistic Set 5","ss06":"Stylistic Set 6","ss07":"Stylistic Set 7","ss08":"Stylistic Set 8","ss09":"Stylistic Set 9","ss10":"Stylistic Set 10","ss11":"Stylistic Set 11","ss12":"Stylistic Set 12","ss13":"Stylistic Set 13","ss14":"Stylistic Set 14","ss15":"Stylistic Set 15","ss16":"Stylistic Set 16","ss17":"Stylistic Set 17","ss18":"Stylistic Set 18","ss19":"Stylistic Set 19","ss20":"Stylistic Set 20","ssty":"Math script style alternates","stch":"Stretching Glyph Decomposition","subs":"Subscript","sups":"Superscript","swsh":"Swash","titl":"Titling","tjmo":"Trailing Jamo Forms","tnam":"Traditional Name Forms","tnum":"Tabular Figures","trad":"Traditional Forms","twid":"Third Widths","unic":"Unicase","valt":"Alternate Vertical Metrics","vatu":"Vattu Variants","vert":"Vertical Writing","vhal":"Alternate Vertical Half Metrics","vjmo":"Vowel Jamo Forms","vkna":"Vertical Kana Alternates","vkrn":"Vertical Kerning","vpal":"Proportional Alternate Vertical Metrics","vrt2":"Vertical Alternates and Rotation","vrtr":"Vertical Alternates for Rotation","zero":"Slashed Zero"}'
        );
      },
      1343: function (e) {
        e.exports = JSON.parse(
          '{"privacy":"When opening your fonts, they stay cached locally in your browser only. When generating an instance from your variable font, your font is uploaded to our server for processing and then immediately deleted. We can’t see or keep track of what you’re doing inside the Dinamo Font Gauntlet."}'
        );
      },
    },
    t = {};
  function n(a) {
    var s = t[a];
    if (void 0 !== s) return s.exports;
    var i = (t[a] = { exports: {} });
    return e[a](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, a, s, i) {
        if (!a) {
          var o = 1 / 0;
          for (u = 0; u < e.length; u++) {
            (a = e[u][0]), (s = e[u][1]), (i = e[u][2]);
            for (var r = !0, l = 0; l < a.length; l++)
              (!1 & i || o >= i) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](a[l]);
              })
                ? a.splice(l--, 1)
                : ((r = !1), i < o && (o = i));
            if (r) {
              e.splice(u--, 1);
              var c = s();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        i = i || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
        e[u] = [a, s, i];
      };
    })(),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (a, s) {
        if ((1 & s && (a = this(a)), 8 & s)) return a;
        if ("object" === typeof a && a) {
          if (4 & s && a.__esModule) return a;
          if (16 & s && "function" === typeof a.then) return a;
        }
        var i = Object.create(null);
        n.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var r = 2 & s && a;
          "object" == typeof r && !~e.indexOf(r);
          r = t(r)
        )
          Object.getOwnPropertyNames(r).forEach(function (e) {
            o[e] = function () {
              return a[e];
            };
          });
        return (
          (o["default"] = function () {
            return a;
          }),
          n.d(i, o),
          i
        );
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var a in t)
          n.o(t, a) &&
            !n.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, a) {
              return n.f[a](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return (
          "assets/js/" +
          e +
          "." +
          {
            92: "9c5a18ff",
            420: "29fc8c09",
            525: "434fd13a",
            777: "e39539ed",
            968: "d536d3c7",
          }[e] +
          ".js"
        );
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return "assets/css/" + e + ".dd16ce80.css";
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "dinamo-font-gauntlet:";
      n.l = function (a, s, i, o) {
        if (e[a]) e[a].push(s);
        else {
          var r, l;
          if (void 0 !== i)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute("src") == a ||
                d.getAttribute("data-webpack") == t + i
              ) {
                r = d;
                break;
              }
            }
          r ||
            ((l = !0),
            (r = document.createElement("script")),
            (r.charset = "utf-8"),
            (r.timeout = 120),
            n.nc && r.setAttribute("nonce", n.nc),
            r.setAttribute("data-webpack", t + i),
            (r.src = a)),
            (e[a] = [s]);
          var p = function (t, n) {
              (r.onerror = r.onload = null), clearTimeout(g);
              var s = e[a];
              if (
                (delete e[a],
                r.parentNode && r.parentNode.removeChild(r),
                s &&
                  s.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            g = setTimeout(
              p.bind(null, void 0, { type: "timeout", target: r }),
              12e4
            );
          (r.onerror = p.bind(null, r.onerror)),
            (r.onload = p.bind(null, r.onload)),
            l && document.head.appendChild(r);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.p = "";
    })(),
    (function () {
      var e = function (e, t, n, a) {
          var s = document.createElement("link");
          (s.rel = "stylesheet"), (s.type = "text/css");
          var i = function (i) {
            if (((s.onerror = s.onload = null), "load" === i.type)) n();
            else {
              var o = i && ("load" === i.type ? "missing" : i.type),
                r = (i && i.target && i.target.href) || t,
                l = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                );
              (l.code = "CSS_CHUNK_LOAD_FAILED"),
                (l.type = o),
                (l.request = r),
                s.parentNode.removeChild(s),
                a(l);
            }
          };
          return (
            (s.onerror = s.onload = i),
            (s.href = t),
            document.head.appendChild(s),
            s
          );
        },
        t = function (e, t) {
          for (
            var n = document.getElementsByTagName("link"), a = 0;
            a < n.length;
            a++
          ) {
            var s = n[a],
              i = s.getAttribute("data-href") || s.getAttribute("href");
            if ("stylesheet" === s.rel && (i === e || i === t)) return s;
          }
          var o = document.getElementsByTagName("style");
          for (a = 0; a < o.length; a++) {
            (s = o[a]), (i = s.getAttribute("data-href"));
            if (i === e || i === t) return s;
          }
        },
        a = function (a) {
          return new Promise(function (s, i) {
            var o = n.miniCssF(a),
              r = n.p + o;
            if (t(o, r)) return s();
            e(a, r, s, i);
          });
        },
        s = { 143: 0 };
      n.f.miniCss = function (e, t) {
        var n = { 525: 1 };
        s[e]
          ? t.push(s[e])
          : 0 !== s[e] &&
            n[e] &&
            t.push(
              (s[e] = a(e).then(
                function () {
                  s[e] = 0;
                },
                function (t) {
                  throw (delete s[e], t);
                }
              ))
            );
      };
    })(),
    (function () {
      var e = { 143: 0 };
      (n.f.j = function (t, a) {
        var s = n.o(e, t) ? e[t] : void 0;
        if (0 !== s)
          if (s) a.push(s[2]);
          else {
            var i = new Promise(function (n, a) {
              s = e[t] = [n, a];
            });
            a.push((s[2] = i));
            var o = n.p + n.u(t),
              r = new Error(),
              l = function (a) {
                if (n.o(e, t) && ((s = e[t]), 0 !== s && (e[t] = void 0), s)) {
                  var i = a && ("load" === a.type ? "missing" : a.type),
                    o = a && a.target && a.target.src;
                  (r.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = i),
                    (r.request = o),
                    s[1](r);
                }
              };
            n.l(o, l, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, a) {
          var s,
            i,
            o = a[0],
            r = a[1],
            l = a[2],
            c = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (s in r) n.o(r, s) && (n.m[s] = r[s]);
            if (l) var u = l(n);
          }
          for (t && t(a); c < o.length; c++)
            (i = o[c]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(u);
        },
        a = (self["webpackChunkdinamo_font_gauntlet"] =
          self["webpackChunkdinamo_font_gauntlet"] || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var a = n.O(void 0, [998], function () {
    return n(9079);
  });
  a = n.O(a);
})();
