package com.zbw.backend.service.user.account;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public interface LoginService {
    public Map<String, String> getToken(String username, String password);
}
