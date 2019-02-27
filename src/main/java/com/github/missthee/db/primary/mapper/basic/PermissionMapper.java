package com.github.missthee.db.primary.mapper.basic;

import org.apache.ibatis.annotations.CacheNamespace;
import org.springframework.stereotype.Component;
import com.github.missthee.config.tkmapper.cache.RedisCache;
import com.github.missthee.config.tkmapper.common.CommonMapper;
import com.github.missthee.db.primary.model.basic.Permission;
@Component
@CacheNamespace(implementation= RedisCache.class)
public interface PermissionMapper extends CommonMapper<Permission> {

}