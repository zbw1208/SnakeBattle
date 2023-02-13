package com.zbw.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.zbw.backend.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
