package com.zbw.backend.controller.user.account;

import com.zbw.backend.service.user.account.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class InfoController {
    @Autowired(required = false)
    private InfoService infoService;

    @GetMapping("/user/account/info/")
    public Map<String, String> getinfo() {
        return infoService.getinfo();
    }

}
